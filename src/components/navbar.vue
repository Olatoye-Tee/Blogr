<template>
  <v-app-bar tile class="navbar bg-transparent pt-10 px-10 nav-fix" flat>
    <v-app-bar-title>
         <router-link class="title pl-10 text-h4 white-text" to="/">Blogr</router-link>
     </v-app-bar-title>
    <v-menu class="pa-1 mr-2" open-on-hover v-for="(link, index) in links" :key="index">
       <template v-slot:activator="{ props }">
          <v-btn class="white-text text-subtitle-1" v-bind="props"> {{ link.title }} <img class="ml-1" src="../assets/icon-arrow-light.svg" /> </v-btn>
       </template>
       <v-list>
          <v-list-item class="pa-2 ma-0" v-for="(sublink, index) in link.sublinks" :key="index">
             <v-list-item-title>
              <v-btn flat class="text-caption text-left"> {{ sublink }} </v-btn>
             </v-list-item-title>
          </v-list-item>
       </v-list>
    </v-menu>
    <v-spacer></v-spacer>
    <v-btn primary class="white-text" >Login</v-btn>
    <v-btn primary class="white-text" >Signup</v-btn>
  </v-app-bar>

</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            links: [
            {title: 'Product', sublinks: ['Overview', 'Pricing', 'Marketplace', 'Features', 'Intergrations']},
            {title: 'Company', sublinks: ['About', 'Team', 'Blog', 'Careers' ] },
            {title: 'Connect', sublinks: ['Contact', 'Newsletter', 'LinkedIn'] }
           ],
        }
   },
}
</script>

<style scoped lang="scss">
 .title{
   text-decoration: none;
 }

.white-text{
   color: $white;
}

 .nav-fix{
   position: inherit !important;
 }

</style>