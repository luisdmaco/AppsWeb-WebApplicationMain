
<template>
  <div class="card">
    <div class="col m12 card-panel">
      <div class="col m4">
        <h1>Parking's List</h1>
      </div>
    </div>
  </div>
  <div class="wrapper" v-for="parkSpace in parkingSpaces">
    <pv-card class="m-2">
      <template #header>
        <img :alt="parkSpace.title" :src="parkSpace.image">
      </template>
      <template #title>
        <p>{{ parkSpace.name }}</p>
      </template>
      <template #content>
        <p>{{ parkSpace.location }}</p>
      </template>
    </pv-card>
  </div>

  <div class="button">
    <pv-button label="Look for other options" class="p-button-raised p-button-rounded  mr-2" @click="openNew"/>
    <pv-button label="Parking Graph" class="p-button-raised p-button-rounded mr-2" @click="openNew"/>
  </div>



</template>

<script>
import {ParkingApiService} from "../services/parking-api.service";
export default {
  name: "park-list.component",
  data() {
    return {
      parkingSpaces: [],
      parkingSpacesService: null
    };
  },
  created() {
    this.parkingSpacesService = new ParkingApiService();
    this.parkingSpacesService.getAll().then((response) => {
      this.parkingSpaces = response.data;
      console.log(this.parkingSpaces);
    });
  },
  methods: {
  }
}

</script>

<style scoped>
.wrapper{
  max-height: 400px;
  min-height: 400px;
  min-width: 400px;
  max-width: 400px;
  border: 1px solid #dddddd;
  display: flex;
  overflow-x: auto;
  float:left;
}
.wrapper::-webkit-scrollbar{
  width: 0px;
}
.wrapper .item{
  min-width: 400px;
  height: 350px;
  line-height: 200px;
  text-align: center;
  color: black;
  background-color: #dddddd;
  margin-right: 5px;
  margin-left: 5px;
}


.button{
  margin: 15px;
  position: fixed;
  top: 800px;
}
</style>