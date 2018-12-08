<template>
  <section class="container">
    <b-tabs type="is-boxed" position="is-centered" class="tab">

      <b-tab-item label="Visualizar" icon="eye" icon-pack="fas">

           <div class="center">
               <b-field>
                    <b-input placeholder="Buscar"
                         type="text"
                         icon-pack="fas"
                         icon="search"
                         maxlength="50"
                         rounded
                         expanded
                         class="input-filter">
                    </b-input>
               </b-field>
          </div>

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
          :default-sort-direction="defaultSortDirection"
        >
          <template slot-scope="props">

            <b-table-column field="id" label="ID" centered sortable width="50">
                 {{props.row.id}}
            </b-table-column>

            <b-table-column field="business_name" label="Razón Social" centered sortable width="100">
              {{props.row.business_name}}
            </b-table-column>

            <b-table-column field="address" label="Dirección" centered sortable width="200">
              {{props.row.address}}
            </b-table-column>

            <b-table-column field="contact" label="Contacto" centered sortable width="80">
              {{props.row.contact}}
            </b-table-column>

            <b-table-column field="email" label="Email" centered sortable width="100">
              {{props.row.email}}
            </b-table-column>

            <b-table-column field="phone" label="Telefono" centered sortable width="100">
              {{props.row.phone}}
            </b-table-column>

            <b-table-column field="event" label="Eventos" width="130" centered sortable>
              <p class="buttons is-centered">
                <a class="button is-small is-success is-outlined">
                  <span class="icon is-small">
                    <i class="fas fa-search"></i>
                  </span>
                </a>
                <a class="button is-small is-info is-outlined">
                  <span class="icon is-small">
                    <i class="fas fa-edit"></i>
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
                  <b-icon pack="fas" icon="frown-open" size="is-large"></b-icon>
                </p>
                <p>Nothing here.</p>
              </div>
            </section>
          </template>
        </b-table>
      </b-tab-item>

      <b-tab-item label="Crear Empresa" icon="building" icon-pack="fas">
        <div class="master">
          <section class="section">
            <p class="title is-5 has-text-centered">Crea un nuevo usuario</p>
            <br>
            <b-field grouped>
              <b-field label="ID">
                <b-input
                  placeholder="ID"
                  type="text"
                  icon-pack="fas"
                  icon="fingerprint"
                  maxlength="15"
                  rounded
                  disabled
                  :value="generateNro()"
                ></b-input>
              </b-field>
              <b-field label="Razón Social">
                <b-input
                  type="text"
                  icon-pack="fas"
                  icon="id-card"
                  maxlength="30"
                  rounded
                  v-model="company.business_name"
                ></b-input>
              </b-field>
              <b-field label="CUIT">
                <b-input
                  type="text"
                  icon-pack="fas"
                  icon="passport"
                  maxlength="30"
                  rounded
                  v-model="company.cuit"
                ></b-input>
              </b-field>
            </b-field>

            <b-field grouped>
              <b-field label="Nombre">
                <b-input
                  type="text"
                  icon-pack="fas"
                  icon="user-circle"
                  maxlength="20"
                  rounded
                  v-model="company.name"
                ></b-input>
              </b-field>
              <b-field label="Dirección">
                <b-input
                  type="text"
                  icon-pack="fas"
                  icon="map-marker-alt"
                  maxlength="50"
                  rounded
                  v-model="company.address"
                ></b-input>
              </b-field>
              <b-field label="Contacto">
                    <b-input
                    type="text"
                    icon-pack="fas"
                    icon="phone-volume"
                    maxlength="30"
                    rounded
                    v-model="company.contact"
                    ></b-input>
               </b-field>
            </b-field>

            <b-field grouped>
              <b-field label="Email">
                <b-input
                  type="text"
                  icon-pack="fas"
                  icon="at"
                  maxlength="30"
                  rounded
                  v-model="company.email"
                ></b-input>
              </b-field>
              <b-field label="Telefono">
                <b-input
                  type="text"
                  icon-pack="fas"
                  icon="phone"
                  maxlength="15"
                  rounded
                  v-model="company.phone"
                ></b-input>
              </b-field>
            </b-field>

            <b-field class="file center">
              <b-upload v-model="company.image">
                <a class="button is-success">
                  <b-icon icon="upload" pack="fas"></b-icon>
                  <span>Subir Logo</span>
                </a>
              </b-upload>
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
import EventBus from "@/vueBus.js";

export default {
  data() {
    return {
      data: [
        {
          id: "1544292373780",
          business_name: "Conte-Mar",
          cuit: "",
          name: "Prueba 1",
          address: "Av. Patria 1234",
          contact: "Juan P.",
          phone: "35-1-52-34890",
          email: "juanp@gmail.com",
          image: null
        },
        {
          id: "1544292373980",
          business_name: "Conte-Todo",
          cuit: "",
          name: "Prueba 2",
          address: "Av. Patria 1234",
          contact: "Pablo",
          phone: "35-1-52-34890",
          email: "pablo21@gmail.com",
          image: null
        },
      ],

      company: {
        id: "",
        business_name: "",
        cuit: "",
        name: "",
        address: "",
        contact: "",
        phone: "",
        email: "",
        image: null
      },

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

    generateNro() {
      let date = new Date();
      return date.getTime();
    },

    deselect() {
      this.selected = "";
    },

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
    }
  },
  created() {},
  watch: {},

  mounted() {
    EventBus.$emit("hijo:change", "company");
  }
};
</script>

<style scoped>
.dialog .modal-card {
  max-height: 200px;
}

.master {
  display: flex;
  justify-content: center;
  align-items: center;
}

.section {
  padding-top: 1px;
}

.container {
  margin: 0px 15px 0px 15px;
}

.breadcrumb {
  margin: 0px;
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

.tab {
  margin: 0px 90px 0px 90px;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

