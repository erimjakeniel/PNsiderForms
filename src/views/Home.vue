<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '',
          },
          {
            src: '',
          },
          {
            src: '',
          },
          {
            src: './assets/logo.png',
            
          },
        ],
      }
    },
  }
</script>