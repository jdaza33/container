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
                                    <input ref="isfocus" class="input is-rounded is-small" type="text" placeholder="Dirección" v-model="address_temp">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-map-marked-alt"></i>
                                    </span>
                                </p>
                                <p class="control has-icons-left">
                                    <input class="input is-rounded is-small" type="text" placeholder="Localidad">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-map-marked-alt"></i>
                                    </span>
                                </p>
                                <a class="button is-small is-rounded is-info" @click.prevent="searchAddress">
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
                            :data="datacont"
                            :bordered="false"
                            :striped="false"
                            :narrowed="true"
                            :hoverable="false"
                            :loading="false"
                            :focusable="false"
                            :mobile-cards="hasMobileCards">

                            <template slot-scope="props">

                                <b-table-column field="date" label="Cant." centered sortable>
                                    2
                                </b-table-column>
                                

                                <b-table-column field="nro" label="Importe" centered sortable>
                                    1500.00
                                </b-table-column>

                                <b-table-column field="status" label="Fecha de Entrega" centered sortable>
                                    03-02-2015
                                </b-table-column>

                                <b-table-column field="event" label="Accion" width="120" centered sortable>
                                    <p class="buttons is-centered">
                                        <a class="button is-small is-success is-outlined">
                                            <span class="icon is-small">
                                            <i class="fas fa-check-circle"></i>
                                            </span>
                                        </a>
                                    </p>
                                </b-table-column>

                                </template>

                            </b-table>

                            <div class="columns">
                                <div class="column is-6">
                                    <p class="title is-6">Contenedores Disponibles: 32 </p>
                                </div>
                                <div class="column is-6 end">
                                    <p class="buttons is-centered">
                                        <a class="button is-small is-success is-outlined">
                                            Aceptar
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
                        <!--<google-map class="map"/>-->
                        <div id="myMap"></div>
                    </div>
                </div>
            </div>

        </div>

        <div class="columns part-two">
            <div class="column is-12">

                <div class="card">

                    <div class="card-content">

                        <p class="title is-6 has-text-centered">Pedidos Comprometidos para la fecha: dd-mm-aaaa</p>

                        <b-table
                        :data="isEmpty ? [] : data"
                        :bordered="isBordered"
                        :striped="isStriped"
                        :narrowed="isNarrowed"
                        :hoverable="isHoverable"
                        :loading="isLoading"
                        :focusable="isFocusable"
                        :mobile-cards="hasMobileCards"
                        
                        :paginated="isPaginated"
                        :per-page="perPage"
                        :current-page.sync="currentPage"
                        :pagination-simple="isPaginationSimple"
                        :default-sort-direction="defaultSortDirection">

                        <template slot-scope="props">

                            <b-table-column field="date" label="" width="1" centered sortable>
                                <div class="field">
                                    <b-checkbox @change.native="check(props.row)"  v-model="props.row.check">
                                    </b-checkbox>
                                </div>
                            </b-table-column>
                            

                            <b-table-column field="nro" label="Nro." centered sortable width="50" pack="fas">
                                {{props.row.nro}}
                            </b-table-column>

                            <b-table-column field="status" label="Estado" width="50" centered sortable>
                                <b-tag 
                                :type="props.row.status == 'P' ? 'is-warning' :
                                props.row.status == 'R' ? 'is-info':
                                props.row.status == 'E' ? 'is-success': 'is-dark'">

                                {{ props.row.status == 'P' ? 'Pendiente' :
                                props.row.status == 'R' ? 'Retirado':
                                props.row.status == 'E' ? 'Entregado': 'A retirar'}}
                                </b-tag>
                            </b-table-column>

                            <b-table-column field="address" label="Dirección"  width="300" centered sortable>
                                <div v-if="checkedRows.length > 0">
                                    <div v-if="checkedRows[0].nro == props.row.nro">
                                        <b-field>
                                            <b-input 
                                            v-model="props.row.address"
                                            type="text"
                                            rounded
                                            maxlength="12"
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

                            <b-table-column field="client" label="Cliente" width="100" centered sortable>
                                <div v-if="checkedRows.length > 0">
                                    <div v-if="checkedRows[0].nro == props.row.nro">
                                        <b-field>
                                            <b-input 
                                            v-model="props.row.client"
                                            type="text"
                                            rounded
                                            maxlength="12"
                                            size="is-small">
                                            </b-input>
                                        </b-field>
                                    </div>
                                    <div v-else>
                                        {{props.row.client}}
                                    </div>
                                </div>
                                <div v-else>
                                    {{props.row.client}}
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
import GoogleMap from '@/components/views/GoogleMap';
import {EventBus} from '@/vueBus.js'
import GoogleMapsLoader from 'google-maps'

export default {
  data() {
      
    return {

        address_temp: '',

        data: [
            {
            nro: 15015,
            status: 'P',
            address: 'Argentina, Buenos Aires',
            client: 'Jose Daza',
            permission: 125456,
            },
            {
            nro: 15016,
            status: 'R',
            address: 'Argentina, Buenos Aires',
            client: 'Francisco de Miranda',
            permission: 125456,
            },
            {
            nro: 15017,
            status: 'E',
            address: 'Argentina, Buenos Aires',
            client: 'Antonio Banderas',
            permission: 125456,
            },
            {
            nro: 15018,
            status: 'A',
            address: 'Argentina, Buenos Aires',
            client: 'Leonardo Dicaprio',
            permission: 125456,
            },
        ],

        datacont: [
            {
            cant: 15,
            importe: '1500.00',
            fecha: '20-03-2015'
            }
        ],

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
        isCheck: false,
    };
  },

  methods: {
    check(data) {
      if (this.checkedRows.length > 0) {
        if (this.checkedRows[0].username == data.username) {
          this.checkedRows.shift();
        } else {
          for (let i in this.data) {
            if (this.data[i].username == this.checkedRows[0].username) {
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

    isFocusInput(){
        this.$refs.isfocus.focus()
    },

    searchAddress(){
        EventBus.$emit('search', this.address_temp)
    },

    googleMaps(){
        GoogleMapsLoader.KEY = 'AIzaSyADO0m7x04v9uSYGHh9n6Qk0ds0S76ta-E';
        GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];
        GoogleMapsLoader.LANGUAGE = 'es';

        GoogleMapsLoader.load(function(google) {
            let point = { lat: -36.539341, lng: -60.338460 }
            let map = new google.maps.Map(document.getElementById('myMap'), {
            zoom: 4,
            center: point
            })
            new google.maps.Marker({position: point, map: map, icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'});
        })
    },

    focusAddress(){
        this.$nextTick(function () {
            this.$refs.isfocus.focus()
        })
    }

  },

  components: {
    GoogleMap,
  },

  /*mounted: function () {
        this.$nextTick(function () {
            this.$refs.isfocus.focus()
        })
    },*/

    mounted: function () {

        this.focusAddress()

        this.googleMaps();
    }
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

.breadcrumb{
    margin: 0px;
}

.field:not(:last-child) {
    margin-bottom: 0rem;
}

.b-table .level {
    padding-bottom: 1rem;
}

/*CSS Para title*/
.box:not(:last-child), .content:not(:last-child), .notification:not(:last-child), .progress:not(:last-child), .table:not(:last-child), .table-container:not(:last-child), .title:not(:last-child), .subtitle:not(:last-child), .block:not(:last-child), .highlight:not(:last-child), .breadcrumb:not(:last-child), .level:not(:last-child), .message:not(:last-child), .tabs:not(:last-child) {
    margin-bottom: 0.5rem;
}

.end{
    float: right;
}

#myMap {
    height:300px;
    width: 100%;
}


</style>

