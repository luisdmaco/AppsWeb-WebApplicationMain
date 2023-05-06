<template>
  <div>
    <button @click="showPopup">Mostrar Pop-up</button>
    <div v-if="show">
      <div class="popup-overlay" @click="hidePopup"></div>
      <div class="popup">
        <p>Este es el contenido del Pop-up</p>
        <button @click="hidePopup">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {



  name: "DialogComponent",
  data() {
    return {
      show: false
    }
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    hidePopup() {
      this.show = false;
    }
  }
};
</script>

<style>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  z-index: 1000;
}
</style>