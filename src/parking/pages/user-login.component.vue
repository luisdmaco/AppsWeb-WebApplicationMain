<template>
  <div class="text-center p-4">
    <h1 style="color:black;">Register</h1>

    <div class="image-left">
      <img src="../../assets/images/flight.jpg " alt="Left image">
    </div>

    <span  class="p-float-label p-4">
      <pv-input-text placeholder="Username" type="text" id="UserId" />
    </span>
    <span class="p-float-label p-4">
    <pv-input-text placeholder="Name" type="text" id="Name"/>
    </span>
      <span class="p-float-label p-4">
    <pv-input-text placeholder="Email" type="text" id="Email"/>
    </span>
      <span class="p-float-label p-4">
    <pv-input-text placeholder="New Password" type="text" id="New Password"/>
    </span>
      <span class="p-float-label p-4">
    <pv-input-text placeholder="Re-enter Password" type="text" id="RePassword"/>
    </span>
    <router-link to="/UserProfile">
  <pv-button style="background-color:#673ab7;">Save changes</pv-button>  <pv-button style="background-color:#ffd740;color:black;">Cancel</pv-button>

    </router-link>


  </div>

</template>
<script>
export default{
  data(){

  }
}
</script>
<style>

.image-left {
  float: left;
  width:5%;
  text-align: left;

}

</style>
