<template>
<div id="dash">

  <nav class="navbar">
      <div class="navbar-brand">
          <a class="navbar-item" @click="go('home')">
            <img src="img/cubos.svg" alt="Andromeda" width="50" height="28">
            <h1 class="title is-5">Container</h1>
          </a>
      </div>

      <div class="navbar-menu">

          <div class="navbar-start">
            <nav class="breadcrumb is-centered navbar-item" aria-label="breadcrumbs">
              <p>{{datenow.toLocaleDateString()}}</p>
              <b-datepicker
                  placeholder="Fecha de inicio"
                  icon="calendar-alt"
                  icon-pack="fas"
                  size="is-small"
                  rounded
                  class="datefilterinput"
                  v-model="datenow">
              </b-datepicker>
            </nav>
          </div>


          
          

          <div class="navbar-start">
            <nav class="breadcrumb is-centered navbar-item" aria-label="breadcrumbs">
              <ul>
                  <li>
                    <a>
                      <span class="icon is-small">
                        <i class="fas fa-home" aria-hidden="true"></i>
                      </span>
                      <span>Home</span>
                    </a>
                  </li>
                  <li class="is-active">
                    <a href="#" aria-current="page">
                      <span class="icon is-small">
                        <i :class="`fas fa-${breadcrumb != '' ? items.find(item => {return breadcrumb == item.url}).icon : 'date'}`" aria-hidden="true"></i>
                      </span>
                      <span>{{breadcrumb != '' ? items.find(item => {return breadcrumb == item.url}).fullname : '...' }}</span>
                    </a>
                  </li>
              </ul>
            </nav>
          </div>
          
          <div class="navbar-end">

              <!--Photo user -->
              <div class="center">
                <figure class="image is-48x48 border">
                  <img src="img/chico.svg" class="is-rounded">
                </figure>
              </div>
              

              <b-dropdown  position="is-bottom-left">
                  <a class="navbar-item is-info" slot="trigger">
                      <span>Menu</span>
                      <b-icon icon="caret-down" pack="fas"></b-icon>
                  </a>

                  <b-dropdown-item custom>
                      <p class="title is-6 has-text-centered">Antonio Banderas</p>
                  </b-dropdown-item>

                  <hr class="dropdown-divider">

                  <b-dropdown-item has-link v-for="(item, index) in items" :key="index">
                      <a @click="go(item.url)">
                          <b-icon :icon="item.icon" pack="fas"></b-icon>
                          {{item.title}}
                      </a>
                  </b-dropdown-item>

                  <hr class="dropdown-divider">
                  <b-dropdown-item value="settings" @click="isComponentModalUserActive = true">
                      <b-icon icon="cog" pack="fas"></b-icon>
                      Cuenta
                  </b-dropdown-item>
                  <b-dropdown-item value="logout" @click="logout()">
                      <b-icon icon="sign-out-alt" pack="fas"></b-icon>
                      Salir
                  </b-dropdown-item>
              </b-dropdown>
          </div>
      </div>
  </nav>

  <div class="center">

    <div class="is-main-content">

      <b-modal :active.sync="isComponentModalUserActive" has-modal-card :width="960">
          <modal-user-data :userData="userData" :userInfoData="userInfoData"></modal-user-data>
      </b-modal>
  
      <router-view></router-view>

    </div>

  </div>

  <!--<div class="columns is-fullheight is-main-content">

      
  </div>-->

  <!--<div class="columns is-fullheight">
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

    
  </div>-->

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
import ModalUserData from '../views/ModalUserData.vue';
import EventBus from '@/vueBus.js';

export default {
  data() {
    //this.$router.push({ name: 'user' });
    return {
      drawer: true,

      preLoading: 0,
      isLoading: false,
      isFullPage: true,

      isComponentModalUserActive: false,

      userData: '',
      userInfoData: '',

      items: [
        { title: 'Home', icon: 'home', role: true, type: 'ALL', url: 'home' },
        {
          title: 'Usuarios',
          icon: 'users',
          role: true,
          type: 'ALL',
          url: 'user',
          fullname: 'Gestión de Usuarios'
        },
        {
          title: 'Pedidos',
          icon: 'cart-plus',
          role: true,
          type: 'ALL',
          url: 'order',
          fullname: 'Gestión de Pedidos'
        },
        {
          title: 'Diario',
          icon: 'clipboard-list',
          role: true,
          type: 'ALL',
          url: 'daily',
          fullname: 'Gestión Diaria'
        },
      ],
      right: null,
      menus: [{ title: 'Cerrar Sesión' }],

      breadcrumb: '',
      breadcrumb_icon: '',

      datenow: new Date()

    };
  },
  methods: {
    logout() {
      this.go('login');
    },

    go(route) {
      this.$router.push({ name: route });
    },

    //Metodo para abrir el menu en vista movil
    burger() {
      let burger = document.querySelector('.burger');
      let nav = document.querySelector('#' + burger.dataset.target);

      burger.classList.toggle('is-active');
      nav.classList.toggle('is-active');
    },

    isNotLoading() {
      if (this.preLoading == 2) {
        this.isLoading = false;
      }
      //this.go('users')
    },
  },

  created() {
    //this.loadDataUser();
    EventBus.$on('hijo:change', (name) => {
      this.breadcrumb = name
    })
  },
  watch: {
    //$route: "loadDataUser"
  },
  components: {
    ModalUserData
  },
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

/*.is-sidebar-menu {
  padding: 2.5rem;
  background-color: rgba(79, 147, 237);
  -webkit-box-shadow: 9px 10px 46px -6px rgba(74, 74, 74, 0.84);
  -moz-box-shadow: 9px 10px 46px -6px rgba(74, 74, 74, 0.84);
  box-shadow: 9px 10px 46px -6px rgba(74, 74, 74, 0.84);
  margin: 80px 20px 20px 20px;
  position: fixed;
  max-height: auto;
  z-index: 2;
}*/

.is-main-content {
  margin: 80px 10px 10px 10px;  
  z-index: 1;
}

.container {
  width: 100vw;

  max-width: 100vw;
  padding: 0px 10px 0px 10px;
}

/*@media screen and (min-width: 1280px){
  .container {
      width: 95vw;
      max-width: 100vw;
  }
}

@media screen and (min-width: 1088px){
  .container {
      max-width: 960px;
      width: 960px;
  }
}*/

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

.border {
  border: solid 1px rgba(79, 147, 237);
  border-radius: 50px;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.datefilterinput {
  margin-left: 1em;
  width: 1em;
}
</style>

