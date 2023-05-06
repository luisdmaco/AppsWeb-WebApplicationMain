<template>
  <div class="row">
    <div class="col m12 card-panel">
      <input-text>Write your name</input-text>
      <div class="col m4">
        <label>Name</label>
        <input type="text" v-model="name">
        <label>Surname</label>
        <label>Last Name</label>
        <label>Age</label>
        <label>Address</label>
        <input type="text" v-model="name">
        <label>T</label>
      </div>
    </div>
  </div>
</template>


<script>
export default {

}


</script>
<style scoped>


.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}


.confirmation-content {
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>