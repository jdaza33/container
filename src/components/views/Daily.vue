<template>

   <section class="container">

      <div class="columns part-one">

        <div class="column is-4">

          <div class="card">
            <div class="card-content">

            <p class="title is-6 has-text-centered">A Entregar</p>

            <b-table
            :data="data_one"
            :bordered="isBordered"
            :striped="isStriped"
            :narrowed="isNarrowed"
            :hoverable="isHoverable"
            :loading="isLoading"
            :focusable="isFocusable"
            :mobile-cards="hasMobileCards"
            class="is-scrollable-two min-text"
            >

            <template slot-scope="props">

              <b-table-column field="date" label="" width="1" centered sortable>
                <div class="field">
                    <b-checkbox @change.native="check(props.row)"  v-model="props.row.check" size="is-small">
                    </b-checkbox>
                </div>
              </b-table-column>

              <b-table-column field="pedido" label="Pedido" centered sortable width="50">
                <small>{{props.row.order}}</small>
              </b-table-column>

              <b-table-column field="estado" label="Estado" centered sortable width="40">
                <small>{{props.row.status}}</small>
              </b-table-column>

              <b-table-column field="obs" label="Observación" centered sortable width="50">
                <small>{{props.row.observation}}</small>
              </b-table-column>

              <b-table-column field="obs" label="Fecha Entr.Comp" centered sortable width="50">
                <small>{{props.row.date_env}}</small>
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

        <div class="column is-4">

          <div class="card">
            <div class="card-content">

              <p class="title is-6 has-text-centered">A Retirar</p>

              <b-table
              :data="data_two"
              :bordered="isBordered"
              :striped="isStriped"
              :narrowed="isNarrowed"
              :hoverable="isHoverable"
              :loading="isLoading"
              :focusable="isFocusable"
              :mobile-cards="hasMobileCards"
              class="is-scrollable-two min-text"
              >

              <template slot-scope="props">

                <b-table-column field="date" label="" width="1" centered sortable>
                  <div class="field">
                      <b-checkbox @change.native="check(props.row)"  v-model="props.row.check" size="is-small">
                      </b-checkbox>
                  </div>
                </b-table-column>

                <b-table-column field="pedido" label="Pedido" centered sortable width="50">
                  <small>{{props.row.order}}</small>
                </b-table-column>

                <b-table-column field="estado" label="Estado" centered sortable width="40">
                  <small>{{props.row.status}}</small>
                </b-table-column>

                <b-table-column field="obs" label="Observación" centered sortable width="50">
                  <small>{{props.row.observation}}</small>
                </b-table-column>

                <b-table-column field="obs" label="Fecha Entr.Comp" centered sortable width="50">
                  <small>{{props.row.date_ret}}</small>
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

        <div class="column is-4">
          <div class="card">
            <div class="card-content">
              <div id="myMapTwo"></div>
            </div>
          </div>
        </div>

      </div>

      <div class="columns part-two">

        <div class="column is-12">

          <b-field grouped>

            <b-select placeholder="Chofer" rounded icon="user-tie" icon-pack="fas" size="is-small">
                <option value="cc">Cheo De La Cruz</option>
                <option value="ab">Antonio Banderas</option>
            </b-select>

            <b-select placeholder="Camión" rounded icon="bus" icon-pack="fas" size="is-small">
                <option value="1">Numero 1</option>
                <option value="2">Numero 2</option>
            </b-select>

          </b-field>

          
          <b-table
          :data="data"
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

            <b-table-column field="estado" label="Estado" centered sortable width="40">
              {{props.row.status}}
            </b-table-column>

            <b-table-column field="pedido" label="Pedido" centered sortable width="50">
              {{props.row.order}}
            </b-table-column>

            <b-table-column field="hour" label="Hora" centered sortable width="50">
              {{props.row.hour}}
            </b-table-column>

            <b-table-column field="nro" label="Nro." centered sortable width="50">
              {{props.row.nro}}
            </b-table-column>

            <b-table-column field="obs" label="Observación" centered sortable width="100">
              {{props.row.observation}}
            </b-table-column>

            <b-table-column field="obs" label="Fecha Env.Prog" centered sortable width="50">
              {{props.row.date_env}}
            </b-table-column>

            <b-table-column field="obs" label="Fecha Ret.Prog" centered sortable width="50">
              {{props.row.date_ret}}
            </b-table-column>

            <b-table-column field="actions" label="Acciones" width="120" centered sortable>
              <p class="buttons is-centered">
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
                  <a class="button is-small is-dark is-outlined">
                      <span class="icon is-small">
                      <i class="fas fa-trash-alt"></i>
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

          <div class="has-text-right">
            <a class="button is-vcentered is-primary is-outlined is-rounded">Guardar</a>
          </div>

        </div>
         
      </div>

   </section>
   
</template>

<script>

import GoogleMapsLoader from 'google-maps';

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
  
  data(){
    GoogleMapsLoader.KEY = 'AIzaSyADO0m7x04v9uSYGHh9n6Qk0ds0S76ta-E';
    GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];
    GoogleMapsLoader.LANGUAGE = 'es';

    //const today = new Date();

    return{
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

      data: [
        {
          status: 'n/a',
          order: 'A',
          hour: '8:00',
          nro: '23',
          observation: 'Dirección / Contacto',
          date_env: 'dd-mm',
          date_ret: 'dd-mm'
        },
        {
          status: 'n/a',
          order: 'A',
          hour: '8:00',
          nro: '23',
          observation: 'Dirección / Contacto',
          date_env: 'dd-mm',
          date_ret: 'dd-mm'
        },
        {
          status: 'n/a',
          order: 'A',
          hour: '8:00',
          nro: '23',
          observation: 'Dirección / Contacto',
          date_env: 'dd-mm',
          date_ret: 'dd-mm'
        },
        {
          status: 'n/a',
          order: 'A',
          hour: '8:00',
          nro: '23',
          observation: 'Dirección / Contacto',
          date_env: 'dd-mm',
          date_ret: 'dd-mm'
        },
        {
          status: 'n/a',
          order: 'A',
          hour: '8:00',
          nro: '23',
          observation: 'Dirección / Contacto',
          date_env: 'dd-mm',
          date_ret: 'dd-mm'
        },
        {
          status: 'n/a',
          order: 'A',
          hour: '8:00',
          nro: '23',
          observation: 'Dirección / Contacto',
          date_env: 'dd-mm',
          date_ret: 'dd-mm'
        },
        {
          status: 'n/a',
          order: 'A',
          hour: '8:00',
          nro: '23',
          observation: 'Dirección / Contacto',
          date_env: 'dd-mm',
          date_ret: 'dd-mm'
        },
        {
          status: 'n/a',
          order: 'A',
          hour: '8:00',
          nro: '23',
          observation: 'Dirección / Contacto',
          date_env: 'dd-mm',
          date_ret: 'dd-mm'
        },
        {
          status: 'n/a',
          order: 'A',
          hour: '8:00',
          nro: '23',
          observation: 'Dirección / Contacto',
          date_env: 'dd-mm',
          date_ret: 'dd-mm'
        },
        {
          status: 'n/a',
          order: 'A',
          hour: '8:00',
          nro: '23',
          observation: 'Dirección / Contacto',
          date_env: 'dd-mm',
          date_ret: 'dd-mm'
        }
        
      ],

      data_one: [
        {
          order: '234',
          status: 'P',
          observation: 'Colon 350',
          date_env: '14-05-2018'
        },
        {
          order: '234',
          status: 'P',
          observation: 'Colon 350',
          date_env: '14-05-2018'
        },
        {
          order: '234',
          status: 'P',
          observation: 'Colon 350',
          date_env: '14-05-2018'
        },
        {
          order: '234',
          status: 'P',
          observation: 'Colon 350',
          date_env: '14-05-2018'
        }
      ],

      data_two: [
        {
          order: '234',
          status: 'P',
          observation: 'Colon 350',
          date_ret: '14-05-2018'
        },
        {
          order: '234',
          status: 'P',
          observation: 'Colon 350',
          date_ret: '14-05-2018'
        },
        {
          order: '234',
          status: 'P',
          observation: 'Colon 350',
          date_ret: '14-05-2018'
        },
        {
          order: '234',
          status: 'P',
          observation: 'Colon 350',
          date_ret: '14-05-2018'
        }
      ],


    }
  },

  methods: {
    initializeGoogleMaps() {
      GoogleMapsLoader.load(function(google) {
          let point = { lat: -36.539341, lng: -60.338460 }
          let map = new google.maps.Map(document.getElementById('myMapTwo'), {
          zoom: 4,
          center: point
          })
          new google.maps.Marker({position: point, map: map, icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'});
      })
    }
  },

  mounted: function() {
    //this.data_aux = this.data;
    this.initializeGoogleMaps();
  },

  watch:{}
   
}
</script>

<style scoped>

.container {
  height: 100%;
  margin: 0;
  padding: 0;
}

.part-one {
  height: 28vh;
  /*border: solid 1px black;*/
  margin: 0px 15px 0px 15px;
}

.part-two {
  height: 45vh;
  /*border: solid 1px black;*/
  margin: 0px 15px 0px 15px;
}

.is-scrollable {
  overflow-y: scroll;
  height: 22em;
  margin-bottom: 1em;
}

.is-scrollable-two {
  overflow-y: scroll;
  height: 12em;
}

.min-text{
  font-size: 0.8em;
}

.is-line{
  display: inline;
}

#myMapTwo {
  height: 195px;
  width: 100%;
}

.map {
  margin-top: -25px;
}

.card-content {
  padding: 0.8rem;
}
</style>


