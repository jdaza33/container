<template>
<div id="dash">

  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" @click="go('home')">
        <img src="img/cubos.svg" alt="Andromeda" width="50" height="28">
        <h1 class="title is-5">Container</h1>
      </a>
      <div class="navbar-burger burger" data-target="moreNavbar" @click="burger()">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="moreNavbar" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">

            <b-dropdown hoverable>
              <button class="button is-vcentered is-primary is-outlined is-rounded" slot="trigger">
                  <span>jvicente</span>
                  <b-icon
                    pack="fas"
                    icon="bars"
                    size="is-small">
                </b-icon>
              </button>

              <b-dropdown-item @click="isComponentModalUserActive = true">Cuenta</b-dropdown-item>
              <b-dropdown-item @click="logout()">Salir</b-dropdown-item>
            </b-dropdown>

          </div>
        </div>
      </div>
    </div>
  </nav>

  <div class="columns is-fullheight">
    <div class="column is-2 is-sidebar-menu is-hidden-mobile">
      <div class="container-photo image is-96x96">
        <img src="img/chico.svg">
        <p class="title is-5 fullname">José Daza</p>
      </div>
      
      <hr>

      <aside class="menu">
        <p class="menu-label title is-6">
          Menu
        </p>

        <ul class="menu-list">
          <li v-for="(item, itemIndex) in items" :key="itemIndex" @click="go(item.url)" v-show="item.role">
            <a>
              <b-icon
                pack="fas"
                :icon="item.icon"
                size="is-small">
              </b-icon>
              {{item.title}}
            </a>
          </li>
        </ul>

      </aside>
    </div>

    <div class="column is-main-content">

       <b-modal :active.sync="isComponentModalUserActive" has-modal-card :width="960">
            <modal-user-data :userData="userData" :userInfoData="userInfoData"></modal-user-data>
        </b-modal>

      <router-view></router-view>
    </div>
  </div>

  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        &copy;2018 — <strong>Container</strong>
      </p>
    </div>
  </footer>

  <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="false"></b-loading>
</div>

</template>

<script>

//Components
import ModalUserData from "../views/ModalUserData.vue";

export default {
  data() {
      this.$router.push({ name: 'user' });
    return {
      drawer: true,

      preLoading: 0,
      isLoading: false,
      isFullPage: true,

      isComponentModalUserActive: false,

      userData: "",
      userInfoData: "",

      items: [
        { title: "Home", icon: "home", role: true, type: "ALL", url: "home" },
        {
          title: "Usuarios",
          icon: "users",
          role: true,
          type: "ALL",
          url: "user"
        },
        {
          title: "Pedidos",
          icon: "cart-plus",
          role: true,
          type: "ALL",
          url: "order"
        }
      ],
      right: null,
      menus: [{ title: "Cerrar Sesión" }]
    };
  },
  methods: {
    logout() {
      this.go('login')
    },

    go(route) {
      this.$router.push({ name: route });
    },


    //Metodo para abrir el menu en vista movil
    burger() {
      let burger = document.querySelector(".burger");
      let nav = document.querySelector("#" + burger.dataset.target);

      burger.classList.toggle("is-active");
      nav.classList.toggle("is-active");
    },

    isNotLoading() {
      if (this.preLoading == 2) {
        this.isLoading = false;
      }
      //this.go('users')
      
    }

  },

  created() {
    //this.loadDataUser();
  },
  watch: {
    //$route: "loadDataUser"
  },
  components: {
    ModalUserData
  }
};
</script>


<style scoped>
.navbar {
  height: 1em;
  -webkit-box-shadow: 0px 7px 36px -13px rgba(79, 147, 237, 0.75);
  -moz-box-shadow: 0px 7px 36px -13px rgba(79, 147, 237, 0.75);
  box-shadow: 0px 7px 36px -13px rgba(79, 147, 237, 0.75);
  margin-bottom: 10px;

  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 4;
}

.menu-label {
  color: white;
}

.menu-list li a {
  color: white;
}

.menu-list li a:hover {
  color: black;
}

.is-sidebar-menu {
  padding: 2.5rem;
  background-color: rgba(79, 147, 237);
  -webkit-box-shadow: 9px 10px 46px -6px rgba(74, 74, 74, 0.84);
  -moz-box-shadow: 9px 10px 46px -6px rgba(74, 74, 74, 0.84);
  box-shadow: 9px 10px 46px -6px rgba(74, 74, 74, 0.84);
  margin: 80px 20px 20px 20px;
  position: fixed;
  max-height: auto;
  z-index: 2;
}

.is-main-content {
  margin: 80px 10px 10px 250px;
  z-index: 1;
}

.footer {
  background-color: white;
  position: fixed;
  bottom: 0px;
  right: 0px;
  left: 0px;
  padding: 3px;
  z-index: 4;
}

.photo {
  width: 60%;
  border-radius: 50px;
  margin: auto;
  display: block;
}

.container-photo {
  margin: auto;
  display: block;
  margin-bottom: 25px;
  text-align: center;
}

.fullname {
  color: white;
}

hr {
  background-color: black;
  opacity: 0.3;
}
</style>

