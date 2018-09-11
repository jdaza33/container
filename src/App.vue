<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    
  }
</script>

<style lang="scss">
  // Import Bulma's core
  
  @import "~bulma/sass/utilities/_all";

  // Set your colors
  $primary: #4f93ed;
  $primary-invert: findColorInvert($primary);
  $twitter: rgb(22, 179, 100);
  $twitter-invert: findColorInvert($twitter);

  // Setup $colors to use as bulma classes (e.g. 'is-twitter')
  $colors: (
      "white": ($white, $black),
      "black": ($black, $white),
      "light": ($light, $light-invert),
      "dark": ($dark, $dark-invert),
      "primary": ($primary, $primary-invert),
      "info": ($info, $info-invert),
      "success": ($success, $success-invert),
      "warning": ($warning, $warning-invert),
      "danger": ($danger, $danger-invert),
      "twitter": ($twitter, $twitter-invert),

      "p": (#0095FF, #0095FF),
      "ae": (#00FF4D, #00FF4D),
      "e": (#2DAD54, #2DAD54),
      "pr": (#F7FF00, #F7FF00),
      "ar": (#FFCC00, #FFCC00),
      "v": (#FF0000, #FF0000),
      "ru": (#FF00F7, #FF00F7),
  );

  // Links
  $link: $primary;
  $link-invert: $primary-invert;
  $link-focus-border: $primary;

  // Import Bulma and Buefy styles
  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>



