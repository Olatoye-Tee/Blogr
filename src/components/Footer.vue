<template>
 <footer class="pt-10 dark-bg round-tr">
    <v-container class="my-5 px-2 py-2">
       <v-row>
          <v-col><h2 class="ma-10 white-text">Blogr</h2></v-col>
          <v-col v-for="(link, index) in links" :key="index">
             <v-row class="mb-4 footer-text" ><h4 class="text-body-1 text-left"> {{ link.title }} </h4></v-row>
             <v-row class="mt-2 footer-text" v-for="(sublink, index) in link.sublinks" :key="index" ><v-btn flat class=" text-body-2 button text-left  ma-0 pa-0"> {{ sublink }} </v-btn></v-row>
          </v-col>
       </v-row>
       <v-row justify="center"><h4 class="pa-0 mt-6 footer-text">Built with &#10084 by Olatee</h4></v-row>
    </v-container>
 </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return{
            links: [
            {title: 'Product', sublinks: ['Overview', 'Pricing', 'Marketplace', 'Features', 'Intergrations']},
            {title: 'Company', sublinks: ['About', 'Team', 'Blog', 'Careers' ] },
            {title: 'Connect', sublinks: ['Contact', 'Newsletter', 'LinkedIn'] }
           ],
        }
    }
}
</script>

<style lang="scss" scoped>

.button{
    outline: none !important;
    background: none !important;
}
.white-text{
   color: $white;
}

.dark-bg{
      background: $very-dark-black-blue;
}


.footer-text{
    color: $grayish-blue;
    letter-spacing: 3px;
    text-transform: capitalize;

}

.round-tr{
    border-top-right-radius: 50px;
}

.left-text{
    text-align: left;
}
.center-text{
    text-align:center;
}
</style>