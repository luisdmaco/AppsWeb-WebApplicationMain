<template>
  <div class="table-wrapper">
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Origin</th>
        <th>Destination</th>
        <th>Date of Trip</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="trip in trips" :key="trip.id">
        <td>{{ trip.id }}</td>
        <td>{{ trip.origin }}</td>
        <td>{{ trip.destination }}</td>
        <td>{{ trip.date }}</td>
      </tr>
      </tbody>


    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trips: [
        { id: 1, origin: 'New York', destination: 'Los Angeles', date: '2022-01-01' },
        { id: 2, origin: 'San Francisco', destination: 'Seattle', date: '2022-01-15' },
        { id: 3, origin: 'Chicago', destination: 'Miami', date: '2022-02-01' },
        { id: 4, origin: 'Boston', destination: 'Washington D.C.', date: '2022-02-15' },
      ],
    };
  },
};
</script>

<style scoped>
.table-wrapper {
  background-color: #2196F3; /* color de fondo azul */
  border-radius: 10px; /* bordes redondeados */
  padding: 20px; /* margen interno */
  display: flex;
  justify-content: center;
}

table {
  color: white;
  font-size: 1.2em;
  text-align: left;
  width: 100%;
}

th,
td {
  padding: 10px;
}

th {
  background-color: rgba(255, 255, 255, 0.2);
  font-weight: bold;
  text-transform: uppercase;
}
</style>