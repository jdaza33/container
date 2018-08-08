<template>
<div class="modal-card">

    <header class="modal-card-head has-text-centered">
        <p class="modal-card-title">Nuevo Usuario</p>
    </header>

    <section class="modal-card-body">
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

    </section>

    <footer class="modal-card-foot foot">
        <button class="button is-outlined is-rounded" type="button" @click="$parent.close()">Cerrar</button>
        <button class="button is-primary is-rounded">Guardar</button>
    </footer>
    
    
</div>
</template>

<script>

//TODO
/*
    Arreglar que se pueda guardar por roles 
*/

export default {
  data() {
    return {

    };
  },

  methods: {

    validateInput(array) {
        let aux = true;

        for (let i in array) {
            if (array[i] == "") {
            aux = false;
            //notify(this, "E007");
            return aux;
            } 
        }

        return aux;
      
    }


  }
};
</script>

<style scoped>
.modal-card {
  width: 445px;
  height: 480px;
}
.modal-card-foot {
  height: 50px;
}

.section {
  width: 36em;
}
</style>


