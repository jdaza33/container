<template>
<div class="modal-card">

    <header class="modal-card-head has-text-centered">
        <p class="modal-card-title">Cuenta</p>
    </header>

    <section class="modal-card-body">
        
        <b-tabs position="is-centered" class="block">
            
            <b-tab-item label="Datos Personales">

                <div class="columns">
                    <div class="column is-6">

                        <b-field>
                            <b-input placeholder="Nombre"
                                type="text"
                                icon-pack="fas"
                                icon="user-circle"
                                maxlength="20"
                                rounded>
                            </b-input>
                        </b-field>

                        <b-field>
                            <b-input placeholder="Apellido"
                                type="text"
                                icon-pack="fas"
                                icon="user-circle"
                                maxlength="20"
                                rounded>
                            </b-input>
                        </b-field>

                        <b-field>
                            <b-input placeholder="Correo Electronico"
                                type="text"
                                icon-pack="fas"
                                icon="at"
                                maxlength="20"
                                rounded>
                            </b-input>
                        </b-field>

                    </div>

                    <div class="column is-6">
                        <div v-if="isProfile">
                            <figure class="image is-96x96">
                                <img :src="api + '/uploads/profile/' + infoPersonal.photo">
                            </figure>
                        </div>
                        <div v-else>
                            <figure class="image is-96x96">
                                <img src="img/chico.svg">
                            </figure>
                        </div>
                        <br>
                        <div class="file has-name is-small has-name is-boxed">
                            <label class="file-label">
                                <input class="file-input" type="file" name="profile" id="profile" ref="profile" v-on:change="handleFileUpload()">
                                <span class="file-cta">
                                <span class="file-icon">
                                    <i class="fas fa-upload"></i>
                                </span>
                                <span class="file-label">
                                    Choose a file…
                                </span>
                                </span>
                                <span class="file-name">
                                {{profile.name}}
                                </span>
                            </label>
                        </div>
                    </div>

                </div>
                
            </b-tab-item>


            <b-tab-item label="Autenticación">

                <b-field>
                    <b-input placeholder="Username"
                        type="text"
                        icon-pack="fas"
                        icon="user-astronaut"
                        maxlength="20"
                        v-model="infoUser.username"
                        rounded>
                    </b-input>
                </b-field>

                <b-field>
                    <b-input placeholder="Permisos"
                        type="text"
                        icon-pack="fas"
                        icon="sync-alt"
                        maxlength="20"
                        v-model="infoUser.ref"
                        rounded
                        disabled>
                    </b-input>
                </b-field>

                <b-field>
                    <b-input placeholder="Role"
                        type="text"
                        icon-pack="fas"
                        icon="hand-paper"
                        maxlength="50"
                        v-model="infoUser.rol"
                        rounded
                        disabled>
                    </b-input>
                </b-field>

                <b-field>
                    <b-input placeholder="Contraseña"
                        type="password"
                        icon-pack="fas"
                        icon="key"
                        password-reveal
                        v-model="infoUser.password"
                        rounded
                        disabled>
                    </b-input>
                </b-field>

            </b-tab-item>
        </b-tabs>

    </section>

    <footer class="modal-card-foot foot">
        <button class="button is-outlined is-rounded" type="button" @click="$parent.close()">Close</button>
        <button class="button is-primary is-rounded">Guardar</button>
    </footer>
    
    
</div>
</template>

<script>


export default {
  data() {
    return {
      infoPersonal: "",
      infoUser: "",
      isProfile: false,
      profile: ""

    };
  },
  props: ["userData", "userInfoData"],

  methods: {},

  created() {
    //this.loadData();
  },
  watch: {
    //$route: "loadData"
  }
};
</script>

<style scoped>
.modal-card {
  width: 500px;
  height: 500px;
}
.modal-card-foot {
  height: 50px;
}
</style>


