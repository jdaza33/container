<template>
    <section class="container">

        <b-tabs type="is-boxed" position="is-centered" class="tab">
            
            <b-tab-item label="Visualizar" icon="eye" icon-pack="fas">
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
                    

                    <b-table-column field="name" label="Nombre" centered sortable width="200" pack="fas">
                        <div v-if="checkedRows.length > 0">
                            <div v-if="checkedRows[0].username == props.row.username">
                                <b-field>
                                    <b-input 
                                    v-model="props.row.name"
                                    type="text"
                                    rounded
                                    maxlength="12"
                                    size="is-small">
                                    </b-input>
                                </b-field>
                            </div>
                            <div v-else>
                                {{props.row.name}}
                            </div>
                        </div>
                        <div v-else>
                            {{props.row.name}}
                        </div>
                    </b-table-column>

                    <b-table-column field="date" label="Creado" centered sortable>
                        <span class="tag is-info">
                            {{ props.row.createdAt}}
                        </span>
                    </b-table-column>

                    <b-table-column field="username" label="Usuario" width="200" centered sortable>
                        <div v-if="checkedRows.length > 0">
                            <div v-if="checkedRows[0].username == props.row.username">
                                <b-field>
                                    <b-input 
                                    v-model="props.row.username"
                                    type="text"
                                    rounded
                                    maxlength="12"
                                    size="is-small">
                                    </b-input>
                                </b-field>
                            </div>
                            <div v-else>
                                {{props.row.username}}
                            </div>
                        </div>
                        <div v-else>
                            {{props.row.username}}
                        </div>
                        
                        
                    </b-table-column>

                    <b-table-column field="rol" label="Rol" centered sortable>
                        {{ props.row.rol }}
                    </b-table-column>

                    <b-table-column field="status" label="Estado" centered sortable>
                        <b-tag 
                        :type="props.row.status == true ? 'is-success' : 'is-danger'">
                        {{ props.row.status == true ? 'Activo' : 'Bloqueado'}}
                        </b-tag>
                    </b-table-column>

                    <b-table-column field="event" label="Eventos" width="130" centered sortable>
                        <p class="buttons is-centered">
                            <!--<a class="button is-small is-info is-outlined" @click="b()">
                                <span class="icon is-small">
                                <i class="fas fa-edit"></i>
                                </span>
                            </a>-->
                            <a class="button is-small is-success is-outlined">
                                <span class="icon is-small">
                                <i class="fas fa-check-circle"></i>
                                </span>
                            </a>
                            <a class="button is-small is-info is-outlined">
                                <span class="icon is-small">
                                <i class="fas fa-sync-alt"></i>
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


            </b-tab-item>
            
            <b-tab-item label="Crear Usuario" icon="user-plus" icon-pack="fas">

                <div class=" master">

                    <section class="section">

                        <p class="title is-5 has-text-centered">Crea un nuevo usuario</p>

                        <!--<p class="title is-6">Nombre: </p>-->
                        <b-field>
                        <b-input placeholder="Nombre"
                                type="text"
                                icon-pack="fas"
                                icon="user-circle"
                                maxlength="20"
                                rounded>
                            </b-input>
                        </b-field>

                        <!--<p class="title is-6">Apellido: </p>-->
                        <b-field>
                        <b-input placeholder="Apellido"
                                type="text"
                                icon-pack="fas"
                                icon="user-circle"
                                maxlength="20"
                                rounded>
                            </b-input>
                        </b-field>

                        <!--<p class="title is-6">Correo Electronico: </p>-->
                        <b-field>
                        <b-input placeholder="Correo Electronico"
                                type="email"
                                icon-pack="fas"
                                icon="at"
                                maxlength="50"
                                rounded>
                            </b-input>
                        </b-field>

                        <!--<p class="title is-6">Usuario</p>-->
                        <b-field>
                        <b-input placeholder="Usuario"
                                type="text"
                                icon-pack="fas"
                                icon="user"
                                maxlength="12"
                                rounded>
                            </b-input>
                        </b-field>
                        <!--<p class="title is-6">Contraseña</p>-->
                        <b-field>
                        <b-input placeholder="Contraseña"
                                type="password"
                                icon-pack="fas"
                                icon="key"
                                password-reveal
                                rounded>
                            </b-input>
                        </b-field>

                        <div class="has-text-centered">
                            <button class="button is-primary is-rounded">Guardar</button>
                        </div>

                    </section>
                </div>

                


            </b-tab-item>


        </b-tabs>

        
    </section>
</template>

<script>

import EventBus from '@/vueBus.js';

export default {
  data() {

    return {

      data: [
          {
              name: "Maria",
              createdAt: "12-07-2018",
              username: "mari432",
              rol: "ALL",
              status: true,
              check: false
          },
          {
              name: "Francisco",
              createdAt: "01-08-2018",
              username: "fran123",
              rol: "ALL",
              status: true,
              check: false
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

      selected: "",

      isPaginated: true,
      isPaginationSimple: false,
      defaultSortDirection: "asc",
      currentPage: 1,
      perPage: 7,

      checkedRows: [],
      isCheck: false
    };
  },

  components: {},

  methods: {
    listenSon() {
      //this.refreshData();
    },

    deselect(){
        this.selected = ''
    },

    check(data){

        if(this.checkedRows.length > 0){
            if(this.checkedRows[0].username == data.username){
                this.checkedRows.shift()
            }else{
                for (let i in this.data){
                    if(this.data[i].username == this.checkedRows[0].username){
                        this.data[i].check = false
                    }
                }
                this.checkedRows.shift()
                this.checkedRows.push(data)
            }
        }else{
            this.checkedRows.push(data)
        }
    }


  },
  created() {
    //this.refreshData();
  },
  watch: {
    //$route: "refreshData"
    
    /*a: () => {
        
        window.document.getElementById("app").onclick = function(){
            alert("has pulsado en botón");
        
            // si lo deseamos podemos eliminar el evento click
            // una vez utilizado por primera vez
            window.document.getElementById("app").unbind("click");
        }
    }*/

    
  },

  mounted(){
      EventBus.$emit('hijo:change', 'user')
  }

};
</script>

<style scoped>

.dialog .modal-card {
    max-height: 200px;
}

.master{
    display: flex;
    justify-content: center;
    align-items: center;
}

.section{
    padding-top: 1px;
}

.container{
    margin: 0px 15px 0px 15px;
}

.breadcrumb{
    margin: 0px;
}

/*CSS Para title*/
.box:not(:last-child), .content:not(:last-child), .notification:not(:last-child), .progress:not(:last-child), .table:not(:last-child), .table-container:not(:last-child), .title:not(:last-child), .subtitle:not(:last-child), .block:not(:last-child), .highlight:not(:last-child), .breadcrumb:not(:last-child), .level:not(:last-child), .message:not(:last-child), .tabs:not(:last-child) {
    margin-bottom: 0.5rem;
}

.tab{
    margin: 0px 90px 0px 90px;
}
</style>

