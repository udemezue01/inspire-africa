<template>
  <div id="app" class="bg-gray-50 h-full">

    <!-- The navigational bar -->



  	<navbar> </navbar>

    <!-- End of the navigational bar -->
    <router-view/>

      <!--  The footer section-->

      <footbar class ="mt-12" > </footbar>
 

<!-- End of the Footer section -->
  </div>
</template>
<script >
  import navbar from './components/Navbar.vue'
  import footbar from './components/Footbar.vue'

export default {

 components:{

		navbar,
    footbar
	},

 data(){

    return {


      }
    }
  }
</script>
