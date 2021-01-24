<template>
  <div id="app" class="bg-green-50 h-full">

  	<navbar>

</navbar>

    
    <router-view/>
  </div>
</template>
<script >
  import navbar from './components/Navbar.vue'

export default {

 components:{

		navbar
	},

 data(){

    return {


      }
    }
  }
</script>
