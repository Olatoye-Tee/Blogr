<template>
   <v-card flat height="450px" class="rounded-0 round-bl  intro-bg">
      <Navbar />
      <v-container class="fill-height">
         <v-row justify="center" class="mt-16 mb-9"> <h1 class="white-text">A modern publishing platform</h1> </v-row>
         <v-row justify="center" class="mb-9" > <p class="white-text">Grow your audience and build your online brand</p> </v-row>
         <v-row justify="center"> 
            <v-col cols="2" align="center"> <v-btn outlined color="white" class="rounded-pill text-body-2 text-capitalize" flat >Start for Free</v-btn> </v-col> 
            <v-col cols="2" align="center"> <v-btn outlined color="white" class="rounded-pill text-body-2 text-capitalize" flat >Learn More</v-btn> </v-col> 
         </v-row>
      </v-container>
   </v-card>

   <v-card height="700px" flat class="rounded-0 white-bg">
      <v-container class="fill-height">
         <v-row justify="center" class="mt-5 mb-10 dark-blue-text"> <h2>Designed for the future</h2> </v-row>
         <v-row>
            <v-col class="py-15 px-10 my-10">
               <v-row class="mb-10">
                  <h4 class="dark-blue-text mb-5">Introducing an extensible editor</h4>
                  <p class="dark-blue-text">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
               </v-row>
               <v-row>
                  <h4 class="dark-blue-text mb-5">Robust content management</h4>
                  <p class="dark-blue-text">Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
               </v-row>
            </v-col>
            <v-col class="relative"> <img class="img-1 absolute" src="../assets/illustration-editor-desktop.svg">  </v-col>
         </v-row>
      </v-container>
   </v-card>

   <v-card flat height="370px" class="rounded-0 dark-bg round-bl-tr">
      <v-container class="fill-height">
         <v-row>
            <v-col class="relative"> <img class="absolute img-4" src="../assets/illustration-phones.svg"> </v-col>
            <v-col class="pa-10 mt-15">
               <h2 class="white-text mb-5">State of the Art Infrastructure</h2>
               <p class="white-text">With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
            </v-col>
         </v-row>
      </v-container>
   </v-card>

   <v-card flat height="720px" class="white-bg my-15">
      <v-container class="fill-height">
         <v-row align="center">
            <v-col class="img-3-container relative"> <img class="absolute img-3" src="../assets/illustration-laptop-desktop.svg"> </v-col>
            <v-col class="pr-10">
               <v-row class="mt-5 mb-10" align="center">
                  <h3 class="mb-5 dark-blue-text">Free, open, simple</h3>
                  <p class="dark-blue-text">Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
               </v-row>
               <v-row align="center" >
                  <h3 class="mb-5 dark-blue-text">Powerful tooling</h3>
                  <p class="dark-blue-text">Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
               </v-row>
            </v-col>
         </v-row>
      </v-container>
   </v-card>
</template>

<script>
import Navbar from '../components/navbar.vue';

export default {
   name: 'Home',
   components: {
          Navbar,
    }
 }
</script>

<style scoped lang="scss">
.white-text{
   color: $white;
}

.white-bg{
   background-color: $white;
}

.dark-blue-text{
   color: $very-dark-blue;
}

.round-bl{
   border-bottom-left-radius: 50px !important;
}

.round-bl-tr{
   border-bottom-left-radius: 50px !important;
   border-top-right-radius: 50px !important;
}

.round-tr{
   border-top-right-radius: 50px !important;
}

.intro-bg{
   background: url("../assets/bg-pattern-intro-desktop.svg"), linear-gradient(to right, $very-light-red, $light-red);
   background-position: 35% 50%;
}

.dark-bg{
      background: no-repeat url("../assets/bg-pattern-circles.svg"), linear-gradient(to right, $very-dark-gray-blue, $very-dark-desaturated-blue);
      background-position: -80% 100%;
}
.absolute{
   position: absolute;
}
.relative{
   position: relative;
}

.img-3-container{
   height: 600px;
}
.img-1{
   height: 650px;
   width: auto;
   top: -100px;
   left: 0;
}

.img-4{
   height: 620px;
   width: auto;
   top: -130px;
   right: 0;
   z-index: 200;
}

.img-3{
   height: 700px;
   width: auto;
   top: 0;
   right: 0px;
}
</style>