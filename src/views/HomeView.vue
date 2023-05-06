<template>

  <div>
    <div v-for="product in products" :key="product.id" class="product-container">
      <h2 class="product-card">{{ product.name }}<br>s/.{{ product.price }}<br>
      <button class="add-button" >Agregar</button>
      </h2>

      <p class="product-card">{{ product.description }}</p>
      <img :src="product.imageUrl" :alt="product.name" class="product-card"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    fetch("./db.json")
        .then((response) => response.json())
        .then((data) => {
          this.products = data.products;
        });
  },
};
</script>
<style>

.product-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: black;
  background-color: #fff;
  border-bottom: 2px solid black;
}
.add-button {
  position: absolute;
  bottom: 10px;
  padding: 10px;
  width:75%;
  background-color: #673ab7;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
}
.product-card {

  width: 300px;
  margin: 10px;
  color: black;
}
.product-container:last-of-type {
  border-bottom: none;
}

</style>