<template>

    <section class="container">

        <!--<nav class="breadcrumb is-centered" aria-label="breadcrumbs">
            <ul>
                <li><a href="#">Panel</a></li>
                <li class="is-active"><a href="#" aria-current="page">Gestión de Pedidos</a></li>
            </ul>
        </nav>-->

        <div class="columns part-one">
            
            <div class="column is-5">

                <div class="card">
                    <div class="card-content">

                        <section>
                            <p class="title is-6">Pedido: </p>

                            <div class="field is-grouped">
                                <p class="control has-icons-left is-expanded">
                                    <input ref="isfocus" class="input is-rounded is-small" @keypress.enter="localizar(address_temp, location_temp)" type="text" placeholder="Dirección" v-model="address_temp">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-map-marked-alt"></i>
                                    </span>
                                </p>
                                <p class="control has-icons-left">
                                    <input class="input is-rounded is-small" @keypress.enter="localizar(address_temp, location_temp)" type="text" placeholder="Localidad" v-model="location_temp">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-map-marked-alt"></i>
                                    </span>
                                </p>
                                <a class="button is-small is-rounded is-info" @click.prevent="localizar(address_temp, location_temp)">
                                    <span class="icon is-small">
                                    <i class="fas fa-search"></i>
                                    </span>
                                </a>
                            </div>

                            <div class="field is-grouped">
                                <p class="control has-icons-left is-expanded">
                                    <input class="input is-rounded is-small" type="text" placeholder="Nombre de Contacto">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>
                                </p>
                                <p class="control has-icons-left">
                                    <input class="input is-rounded is-small" type="text" placeholder="Cliente">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>
                                </p>
                            </div>

                            <p class="control has-icons-left">
                                <input class="input is-rounded is-small" type="text" placeholder="Telefono">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-phone"></i>
                                </span>
                            </p>

                            <p class="control has-icons-left">
                                <input class="input is-rounded is-small" type="text" placeholder="Observaciones">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-globe"></i>
                                </span>
                            </p>

                            <b-table
                            :data="dataTableOrders"
                            :bordered="false"
                            :striped="false"
                            :narrowed="true"
                            :hoverable="false"
                            :loading="false"
                            :focusable="false"
                            :mobile-cards="hasMobileCards"
                            class="is-scrollable-two min-text">

                            <template slot-scope="props">

                                <b-table-column field="date" label="" width="1" centered sortable>
                                    <div class="field">
                                        <b-checkbox @change.native="checkTableOrders(props.row)"  v-model="props.row.check" size="is-small">
                                        </b-checkbox>
                                    </div>
                                </b-table-column>

                                <b-table-column field="date" label="Cant." width="80" centered sortable>
                                    <div v-if="checkedRowsTableOrders.length > 0">
                                        <div v-if="checkedRowsTableOrders[0].nro == props.row.nro">
                                            <b-field>
                                                <b-input 
                                                v-model="props.row.cant"
                                                type="number"
                                                rounded
                                                maxlength="3"
                                                size="is-small">
                                                </b-input>
                                            </b-field>
                                        </div>
                                        <div v-else>
                                            {{props.row.cant}}
                                        </div>
                                    </div>
                                    <div v-else>
                                        {{props.row.cant}}
                                    </div>
                                </b-table-column>
                                

                                <b-table-column field="nro" label="Importe" width="100" centered sortable>
                                    {{1000 * props.row.cant}}
                                </b-table-column>

                                <b-table-column field="status" label="Fecha de Entrega" centered sortable>
                                    <div v-if="checkedRowsTableOrders.length > 0">
                                        <div v-if="checkedRowsTableOrders[0].nro == props.row.nro">
                                            <b-field>
                                                <b-input 
                                                v-model="props.row.date_ent"
                                                type="text"
                                                rounded
                                                maxlength="10"
                                                size="is-small">
                                                </b-input>
                                            </b-field>
                                        </div>
                                        <div v-else>
                                            {{props.row.date_ent}}
                                        </div>
                                    </div>
                                    <div v-else>
                                        {{props.row.date_ent}}
                                    </div>
                                </b-table-column>

                                <b-table-column field="event" label="Accion" width="120" centered sortable>
                                    <p class="buttons is-centered">
                                        <a class="button is-small is-success is-outlined" @click="generateRowTableOrders()">
                                            <span class="icon is-small">
                                            <i class="fas fa-plus-circle"></i>
                                            </span>
                                        </a>
                                    </p>
                                </b-table-column>

                                </template>

                            </b-table>

                            <div class="columns">
                                <div class="column is-6">
                                    <p><small>{{`Contenedores Disponibles: ${contAvailableContainer()}`}}</small></p>
                                </div>
                                <div class="column is-6 end">
                                    <p class="buttons is-centered">
                                        <a class="button is-small is-success is-outlined">
                                            Guardar
                                        </a>
                                        <a class="button is-small is-danger is-outlined">
                                            Cancelar
                                        </a>
                                    </p>
                                </div>
                            </div>
       

                        </section>

                        
                    </div>
                </div>

            </div>

            <div class="column is-7">
                <div class="card">
                    <div class="card-content">
                        <div id="myMap"></div>
                    </div>
                </div>
            </div>

        </div>

        <div class="columns part-two">
            <div class="column is-12">

                <div class="card">

                    <div class="card-content">

                        <p class="title is-6 has-text-centered">Pedidos Comprometidos para la fecha: {{today.toLocaleDateString()}}</p>

                        <section>

                            <b-field grouped>
                              
                              <b-field grouped id="datefilter">
                                <b-field>
                                  <b-datepicker
                                      placeholder="Fecha de inicio"
                                      icon="calendar-alt"
                                      icon-pack="fas"
                                      size="is-small"
                                      rounded
                                      class="datefilterinput"
                                      v-model="date_filter_one"
                                      :min-date="changeDateOne()">
                                  </b-datepicker>
                                </b-field>
                                <b-field>
                                  <b-datepicker
                                      placeholder="Fecha de fin"
                                      icon="calendar-alt"
                                      icon-pack="fas"
                                      size="is-small"
                                      rounded
                                      class="datefilterinput"
                                      v-model="date_filter_two"
                                      :min-date="date_filter_one"
                                      :disabled="isDateTwoDisabled">
                                  </b-datepicker>
                                </b-field>
                                <b-field>
                                  <a class="button is-small is-rounded is-info" @click.prevent="filterDate()">
                                    <span class="icon is-small">
                                    <i class="fas fa-search"></i>
                                    </span>
                                  </a>
                                </b-field>
                              </b-field>

                              <b-field grouped id="textfilter">

                                <p class="control has-icons-left">
                                  <input class="input is-rounded is-small" type="text" placeholder="Buscar" @keypress.enter="filter()" v-model="search">
                                  <span class="icon is-small is-left">
                                      <i class="fas fa-search"></i>
                                  </span>
                                </p>
                                  
                              </b-field>

                              <b-field>

                                <b-radio-button v-model="search"
                                    native-value=""
                                    type="is-black"
                                    size="is-small"
                                    @click.native="filterStatus('ALL')">
                                    <b-icon icon="eye" pack="fas"></b-icon>
                                    <span>Todos</span>
                                </b-radio-button>

                                <b-tooltip
                                    label="Pendiente"
                                    animated>
                                    <b-radio-button v-model="search"
                                      native-value="P"
                                      type="is-p"
                                      size="is-small"
                                      @click.native="filterStatus('P')">
                                      <b-icon icon="exclamation" pack="fas"></b-icon>
                                      <span>P</span>
                                  </b-radio-button>
                                </b-tooltip>

                                <b-tooltip
                                    label="A Enviar"
                                    animated>
                                    <b-radio-button v-model="search"
                                      native-value="AE"
                                      type="is-ae"
                                      size="is-small"
                                      @click.native="filterStatus('AE')">
                                      <b-icon icon="check" pack="fas"></b-icon>
                                      <span>AE</span>
                                  </b-radio-button>
                                </b-tooltip>

                                <b-tooltip
                                    label="Entregado"
                                    animated>
                                    <b-radio-button v-model="search"
                                      native-value="E"
                                      type="is-e"
                                      size="is-small"
                                      @click.native="filterStatus('E')">
                                      <b-icon icon="check-double" pack="fas"></b-icon>
                                      <span>E</span>
                                  </b-radio-button>
                                </b-tooltip>

                                <b-tooltip
                                    label="Posible Retirar"
                                    animated>
                                    <b-radio-button v-model="search"
                                      native-value="PR"
                                      type="is-pr"
                                      size="is-small"
                                      @click.native="filterStatus('PR')">
                                      <b-icon icon="people-carry" pack="fas"></b-icon>
                                      <span>PR</span>
                                  </b-radio-button>
                                </b-tooltip>

                                <b-tooltip
                                  label="A Retirar"
                                  animated>
                                  <b-radio-button v-model="search"
                                    native-value="AR"
                                    type="is-ar"
                                    size="is-small"
                                    @click.native="filterStatus('AR')">
                                    <b-icon icon="shopping-cart" pack="fas"></b-icon>
                                    <span>AR</span>
                                  </b-radio-button>
                                </b-tooltip>

                                <b-tooltip
                                  label="Vencido"
                                  animated>
                                  <b-radio-button v-model="search"
                                      native-value="V"
                                      type="is-v"
                                      size="is-small"
                                      @click.native="filterStatus('V')">
                                      <b-icon icon="frown-open" pack="fas"></b-icon>
                                      <span>V</span>
                                  </b-radio-button>
                                </b-tooltip>

                                <b-tooltip
                                  label="Retirar Urgente"
                                  animated>
                                  <b-radio-button v-model="search"
                                      native-value="RU"
                                      type="is-ru"
                                      size="is-small"
                                      @click.native="filterStatus('RU')">
                                      <b-icon icon="exclamation-triangle" pack="fas"></b-icon>
                                      <span>RU</span>
                                  </b-radio-button>
                                </b-tooltip>
                                  
                              </b-field>
                                
                            </b-field>

                        </section>

                        

                        <b-table
                        :data="data_aux"
                        :bordered="isBordered"
                        :striped="isStriped"
                        :narrowed="isNarrowed"
                        :hoverable="isHoverable"
                        :loading="isLoading"
                        :focusable="isFocusable"
                        :mobile-cards="hasMobileCards"
                        class="is-scrollable"
                        >

                        <template slot-scope="props">

                            <b-table-column field="date" label="" width="1" centered sortable>
                                <div class="field">
                                    <b-checkbox @change.native="check(props.row)"  v-model="props.row.check" size="is-small">
                                    </b-checkbox>
                                </div>
                            </b-table-column>
                            

                            <b-table-column field="nro" label="Nro." centered sortable width="50" pack="fas">
                                {{props.row.nro}}
                            </b-table-column>

                            <b-table-column field="status" label="Estado" width="20" centered sortable>
                                <b-tag 
                                :type="`is-${props.row.status.toLowerCase()}`">

                                {{ status.find(x => {return x.abv == props.row.status}).name }}
                                </b-tag>
                            </b-table-column>

                            <b-table-column field="address" label="Dirección"  width="250" centered sortable>
                                <div v-if="checkedRows.length > 0">
                                    <div v-if="checkedRows[0].nro == props.row.nro">
                                        <b-field>
                                            <b-input 
                                            v-model="props.row.address"
                                            type="text"
                                            rounded
                                            maxlength="60"
                                            size="is-small">
                                            </b-input>
                                        </b-field>
                                    </div>
                                    <div v-else>
                                        {{props.row.address}}
                                    </div>
                                </div>
                                <div v-else>
                                    {{props.row.address}}
                                </div>
                            </b-table-column>

                            <b-table-column field="client" label="Contacto" width="120" centered sortable>
                                <div v-if="checkedRows.length > 0">
                                    <div v-if="checkedRows[0].nro == props.row.nro">
                                        <b-field>
                                            <b-input 
                                            v-model="props.row.contact"
                                            type="text"
                                            rounded
                                            maxlength="30"
                                            size="is-small">
                                            </b-input>
                                        </b-field>
                                    </div>
                                    <div v-else>
                                        {{props.row.contact}}
                                    </div>
                                </div>
                                <div v-else>
                                    {{props.row.contact}}
                                </div>
                            </b-table-column>

                            <b-table-column field="date" label="Fecha Comprometida" width="140" centered sortable>
                                <div v-if="checkedRows.length > 0">
                                    <div v-if="checkedRows[0].nro == props.row.nro">
                                        <b-field>
                                            <b-input 
                                            v-model="props.row.date"
                                            type="text"
                                            rounded
                                            maxlength="8"
                                            size="is-small">
                                            </b-input>
                                        </b-field>
                                    </div>
                                    <div v-else>
                                        {{props.row.date}}
                                    </div>
                                </div>
                                <div v-else>
                                    {{props.row.date}}
                                </div>
                            </b-table-column>

                            <b-table-column field="event" label="Eventos" width="120" centered sortable>
                                <p class="buttons is-centered">
                                    <a class="button is-small is-info is-outlined" @click="b()">
                                        <span class="icon is-small">
                                        <i class="fas fa-map-marker-alt"></i>
                                        </span>
                                    </a>
                                    <a class="button is-small is-success is-outlined">
                                        <span class="icon is-small">
                                        <i class="fas fa-check-circle"></i>
                                        </span>
                                    </a>
                                    <a class="button is-small is-danger is-outlined">
                                        <span class="icon is-small">
                                        <i class="fas fa-times-circle"></i>
                                        </span>
                                    </a>
                                    
                                </p>
                            </b-table-column>

                            </template>

                            <template slot="empty">
                                <section class="section">
                                    <div class="content has-text-grey has-text-centered">
                                        <p>
                                            <b-icon
                                                pack="fas"
                                                icon="frown-open"
                                                size="is-large">
                                            </b-icon>
                                        </p>
                                        <p>Nothing here.</p>
                                    </div>
                                </section>
                            </template>
                        </b-table>
                    </div>
                </div>              
                

            </div>
        </div>
            
    </section>

    
</template>

<script>
//import { EventBus } from "@/vueBus.js";
import GoogleMapsLoader from 'google-maps';
import EventBus from '@/vueBus.js';

/*
Pendiente P (#0095FF) --> https://image.ibb.co/goBifU/mapas_y_banderas_6.png
A Enviar AE (#00FF4D) --> https://image.ibb.co/k9p8Ep/mapas_y_banderas_5.png
Entregado E (#2DAD54) --> https://image.ibb.co/m2uKLU/mapas_y_banderas_4.png
Posible Retirar PR (#F7FF00) --> https://image.ibb.co/kAMG0U/mapas_y_banderas_3.png
A Retirar AR (#FFCC00) --> https://image.ibb.co/dLUfS9/mapas_y_banderas_2.png
Vencido V (#FF0000) --> https://image.ibb.co/n1vWZp/mapas_y_banderas_1.png
Retirar Urgente RU (#FF00F7) --> https://image.ibb.co/ip8779/mapas_y_banderas.png
*/

export default {
  data() {
    GoogleMapsLoader.KEY = 'AIzaSyADO0m7x04v9uSYGHh9n6Qk0ds0S76ta-E';
    GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];
    GoogleMapsLoader.LANGUAGE = 'es';

    const today = new Date();

    return {
      //Datos Estados
      status: [
        {
          name: 'Pendiente',
          abv: 'P',
          icon: 'https://image.ibb.co/goBifU/mapas_y_banderas_6.png',
          color: '#0095FF',
        },
        {
          name: 'A Enviar',
          abv: 'AE',
          icon: 'https://image.ibb.co/k9p8Ep/mapas_y_banderas_5.png',
          color: '#00FF4D',
        },
        {
          name: 'Entregado',
          abv: 'E',
          icon: 'https://image.ibb.co/m2uKLU/mapas_y_banderas_4.png',
          color: '#2DAD54',
        },
        {
          name: 'Posible Retirar',
          abv: 'PR',
          icon: 'https://image.ibb.co/kAMG0U/mapas_y_banderas_3.png',
          color: '#F7FF00',
        },
        {
          name: 'A Retirar',
          abv: 'AR',
          icon: 'https://image.ibb.co/dLUfS9/mapas_y_banderas_2.png',
          color: '#FFCC00',
        },
        {
          name: 'Vencido',
          abv: 'V',
          icon: 'https://image.ibb.co/n1vWZp/mapas_y_banderas_1.png',
          color: '#FF0000',
        },
        {
          name: 'Retirar Urgente',
          abv: 'RU',
          icon: 'https://image.ibb.co/ip8779/mapas_y_banderas.png',
          color: '#FF00F7',
        },
      ],

      //Datos de la tabla
      data: [
        {
          nro: 15015,
          status: 'P',
          address: 'La Rioja 854 Córdoba Argentina',
          contact: 'Luis Antonio 451254521',
          date: '06/09/2018',
          permission: 125456,
        },
        {
          nro: 15016,
          status: 'AE',
          address: 'Santa Rosa 1120 Córdoba Argentina',
          contact: 'Sra Monica 434343',
          date: '07/09/2018',
          permission: 125456,
        },
        {
          nro: 15017,
          status: 'E',
          address: 'Rio Negro 500 Córdoba Argentina',
          contact: 'Ramon Hernandez 123456789',
          date: '10/09/2018',
          permission: 125456,
        },
        {
          nro: 15018,
          status: 'PR',
          address: 'San Luis 300 Córdoba Argentina',
          contact: 'Marcos Perez Jimenez 1203210',
          date: '08/09/2018',
          permission: 125456,
        },
        {
          nro: 15019,
          status: 'AR',
          address: 'Mendoza 645 Córdoba Argentina',
          contact: 'Simon Bolivar 4564111',
          date: '08/09/2018',
          permission: 125456,
        },
        {
          nro: 15020,
          status: 'V',
          address: 'Bv San Juan 890 Córdoba Argentina',
          contact: 'Jose Daza 2418784111',
          date: '11/09/2018',
          permission: 125456,
        },
        {
          nro: 15021,
          status: 'RU',
          address: 'Santa Fé 843 Córdoba Argentina',
          contact: 'Leonardo Dicaprio 2418784111',
          date: '01/09/2018',
          permission: 125456,
        },
      ],

      //Propiedades de la tabla
      isEmpty: false,
      isBordered: false,
      isStriped: true,
      isNarrowed: true,
      isHoverable: true,
      isFocusable: false,
      isLoading: false,
      hasMobileCards: true,

      selected: '',

      isPaginated: true,
      isPaginationSimple: false,
      defaultSortDirection: 'asc',
      currentPage: 1,
      perPage: 4,

      checkedRows: [],
      checkedRowsTableOrders: [],
      isCheck: false,

      //Datos auxiliares
      address_temp: '',
      location_temp: 'Cordoba',
      showState: 'ALL',

      data_aux: [],
      availableContainer: 30,

      isDateTwoDisabled: true,

      dataTableOrders: [
        {
          nro: 1,
          cant: 2,
          import: 2000,
          date_ent: '03-02-2018'
        }
      ],

      search: '',
      date_filter_one: '',
      date_filter_two: '',
      today,

      max_date_one: '',
      max_date_two: ''

    };
  },

  methods: {

    updateVue(){
      this.date_filter_two = '';
      this.$forceUpdate();
    },

    check(data) {
      if (this.checkedRows.length > 0) {
        if (this.checkedRows[0].nro == data.nro) {
          this.checkedRows.shift();
        } else {
          for (let i in this.data) {
            if (this.data[i].nro == this.checkedRows[0].nro) {
              this.data[i].check = false;
            }
          }
          this.checkedRows.shift();
          this.checkedRows.push(data);
        }
      } else {
        this.checkedRows.push(data);
      }
    },

    checkTableOrders(data) {
      if (this.checkedRowsTableOrders.length > 0) {
        if (this.checkedRowsTableOrders[0].username == data.username) {
          this.checkedRowsTableOrders.shift();
        } else {
          for (let i in this.data) {
            if (this.data[i].username == this.checkedRowsTableOrders[0].username) {
              this.data[i].check = false;
            }
          }
          this.checkedRowsTableOrders.shift();
          this.checkedRowsTableOrders.push(data);
        }
      } else {
        this.checkedRowsTableOrders.push(data);
      }
    },

    initializeGoogleMaps() {
      GoogleMapsLoader.load(google => {
        let point = { lat: -31.416666, lng: -64.183333 };
        let map = new google.maps.Map(document.getElementById('myMap'), {
          zoom: 13,
          center: point,
        });

        for (let i in this.data_aux) {
          let icon = '';
          for (let j in this.status) {
            if (this.data_aux[i].status == this.status[j].abv) {
              icon = this.status[j].icon;
            }
          }
          let geocoder = new google.maps.Geocoder();
          geocoder.geocode(
            { address: this.data_aux[i].address },
            (res, status) => {
              if (status == 'OK') {
                map.setCenter(res[0].geometry.location);
                new google.maps.Marker({
                  map: map,
                  position: res[0].geometry.location,
                  icon,
                });
              } /*else {
              let mensajeError = "";
              if (status === "ZERO_RESULTS") {
                mensajeError = "No hubo resultados para la dirección ingresada.";
              } else if (
                status === "OVER_QUERY_LIMIT" ||
                status === "REQUEST_DENIED" ||
                status === "UNKNOWN_ERROR"
              ) {
                mensajeError = "Error general del mapa.";
              } else if (status === "INVALID_REQUEST") {
                mensajeError = "Error de la web. Contacte con Name Agency.";
              }
              alert(mensajeError);
            }*/
            }
          );
        }
      });
    },

    localizar(a, b) {
      let direccion = a + ', ' + b;

      GoogleMapsLoader.load(google => {
        let map = new google.maps.Map(document.getElementById('myMap'), {
          zoom: 14,
        });

        let geocoder = new google.maps.Geocoder();

        geocoder.geocode({ address: direccion }, (res, status) => {
          if (status == 'OK') {
            map.setCenter(res[0].geometry.location);
            new google.maps.Marker({
              map: map,
              position: res[0].geometry.location,
            });
          } else {
            let mensajeError = '';
            if (status === 'ZERO_RESULTS') {
              mensajeError = 'No hubo resultados para la dirección ingresada.';
            } else if (
              status === 'OVER_QUERY_LIMIT' ||
              status === 'REQUEST_DENIED' ||
              status === 'UNKNOWN_ERROR'
            ) {
              mensajeError = 'Error general del mapa.';
            } else if (status === 'INVALID_REQUEST') {
              mensajeError = 'Error de la web. Contacte con Name Agency.';
            }
            alert(mensajeError);
          }
        });
      });
    },

    focusAddress() {
      this.$nextTick(() => {
        this.$refs.isfocus.focus();
      });
    },

    filterArray(array, text) {
      let aux_array = [];
      let regex = new RegExp(`${text}.*`, 'i');

      for (let i in array) {
        let temp = false;
        for (let j in array[i]) {
          if (regex.test(array[i][j].toString()) && !temp) {
            aux_array.push(array[i]);
            temp = true;
          }
        }
      }

      return aux_array;
    },

    filter() {
      this.data_aux = this.filterArray(this.data, this.search);
      this.initializeGoogleMaps();
    },

    /*fiterDate(start, end){

    }*/

    filterStatus(status) {
      let temp = [];
      if (status != 'ALL') {
        temp.push(
          this.data.find(x => {
            return x.status == status;
          })
        );
      } else {
        for (let i in this.data) {
          temp.push(this.data[i]);
        }
      }
      this.data_aux = temp;
      this.initializeGoogleMaps();
    },

    generateRowTableOrders(){
      this.dataTableOrders.push(
        {
          nro: this.dataTableOrders[this.dataTableOrders.length-1].nro + 1,
          cant: 1,
          import: 1000,
          date_ent: '01/10/2018'
        }
      )
    },

    contAvailableContainer(){
      let sum = this.availableContainer
      for (let i in this.dataTableOrders){
        sum -= this.dataTableOrders[i].cant
      }
      return sum
    },

    changeDateOne(){
      this.date_filter_two = this.date_filter_one
      if(this.date_filter_one != '') this.isDateTwoDisabled = false
      return new Date(1900,1,1)
    }

  },

  mounted: function() {
    this.data_aux = this.data;

    this.focusAddress();

    //this.googleMaps();

    this.initializeGoogleMaps();

    //this.showStatus(this.showState)

    EventBus.$emit('hijo:change', 'order')
  },

  watch: {},
};
</script>


<style scoped>
.container {
  height: 100%;
  margin: 0;
  padding: 0;
}

.part-one {
  height: 38vh;
  /*border: solid 1px black;*/
  margin: 0px 15px 0px 15px;
}

.part-two {
  height: 38vh;
  /*border: solid 1px black;*/
  margin: 0px 15px 0px 15px;
}

.map {
  margin-top: -25px;
}

.card-content {
  padding: 0.8rem;
}

.field:not(:last-child) {
  margin-bottom: 0rem;
}

.b-table .level {
  padding-bottom: 1rem;
}

/*CSS Para title*/
.box:not(:last-child),
.content:not(:last-child),
.notification:not(:last-child),
.progress:not(:last-child),
.table:not(:last-child),
.table-container:not(:last-child),
.title:not(:last-child),
.subtitle:not(:last-child),
.block:not(:last-child),
.highlight:not(:last-child),
.breadcrumb:not(:last-child),
.level:not(:last-child),
.message:not(:last-child),
.tabs:not(:last-child) {
  margin-bottom: 0.5rem;
}

.end {
  float: right;
}

#myMap {
  height: 230px;
  width: 100%;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

#datefilter {
  width: 30%;
  margin-left: 8%;
}

.datefilterinput {
  width: 11em;
}

#textfilter {
  width: 20%;
}

.is-scrollable {
  overflow-y: scroll;
  height: 15em;
}

.is-scrollable-two {
  overflow-y: scroll;
  height: 5.4em;
}

.min-text{
  font-size: 0.8em;
}
</style>

