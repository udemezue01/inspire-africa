<template>


		<nav class=" px-12 lg:px-24 py-4 flex justify-between item-center">

			<div class="flex item-center space-x-3">

				<img src="/img/logo/sun.svg" class="h-10 w-10 object-center object-cover">
				
			<!-- 	<p class="text-gray-800 font-body font-bolder text-lg font-black tracking-wider hover:text-gray-900"> Inspire Africa</p> -->


			</div>

			<div class="flex justify-between space-x-6 item-center hidden lg:block">

				<a href="" class="text-gray-800 font-body font-medium text-lg tracking-wider px-3 py-3 rounded-lg hover:text-gray-900 hover:bg-green-100 ">courses</a>
				<a href="" class="text-gray-800 font-body font-medium text-lg tracking-wider px-3 py-3 rounded-lg hover:text-gray-900 hover:bg-green-100 "> about </a>

				<a href="" class="text-gray-800 font-body font-medium text-lg tracking-wider px-3 py-3 rounded-lg hover:text-gray-900 hover:bg-green-100 ">blog </a>
				<a href="" class="text-gray-800 font-body font-medium text-lg tracking-wider px-3 py-3 rounded-lg hover:text-gray-900 hover:bg-green-100 ">contact </a>
				

			</div>

			<div class="item-center block lg:hidden ">
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
			</div>

			<div class="flex justify-between item-center space-x-3 hidden lg:block">
				
				<a href="" class="text-green-600 font-body font-medium text-lg  tracking-wider ring-1 ring-green-600 px-3 py-2 rounded-lg hover:text-gray-900 "> Join</a>


				<a href="" class="bg-green-600 text-white px-3 py-2 rounded-lg font-medium text-lg tracking-wider"> Login</a>

				<!-- The dropdown section -->

			


				<!-- End of the dropdown section -->


			</div>
			

		</nav>
		

	



</template>


<script>
	
export default {


	data(){

		return{

			isOpen:false,

		}
	}
}
</script>