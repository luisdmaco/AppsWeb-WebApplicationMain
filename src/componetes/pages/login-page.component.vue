<template>
  <div class="body">
    <div class="login">
      <img src="../../assets/images/logo-login.png" alt="Logo TripStore">
      <h1 style="color:black;" >Login</h1>
      <span  class="p-float-label p-4">
      <pv-input-text placeholder="Username" type="text" id="UserId" />
    </span>
      <span class="p-float-label p-4">
    <pv-input-text placeholder="Password" type="password" id="Password"/>
    </span>


      <pv-button class="width" @click="redirecthome" label="Login"></pv-button><br><br>
      <pv-button class="changes" @click="redirectToDashboard" label="Sign Up"></pv-button>



    </div>
  </div>
</template>

<script>

</script>


<style scoped>
.body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.login {
  width: 100%;

  padding: 15px;
  margin: auto;
  text-align: center;
}
.width {
  background-color: #673ab7;
  width: 8%;
  margin-top: 10px;

}
.changes{
  background-color: #ffd740;
  color:black;

  width: 8%;
  margin-top: 10px;
}


</style>