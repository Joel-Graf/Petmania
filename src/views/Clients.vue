<template>
  <div>
    <!-- {{items}} -->
    <AppTable 
      :filters="'Clientes'"
      :headers="headers"
      :items="items"
    />
  </div>
</template>

<script>
import AppTable from './components/AppTable.vue'
export default {
  components: { AppTable },
  data() {
    return {
      headers: [
        { text: 'Nome', value: 'name' },
        { text: 'Endereço', value: 'address' },
        { text: 'Cidade', value: 'city' },
        { text: 'UF', value: 'uf' },
        { text: 'Telefone', value: 'phone1' },
        { text: 'Telefone (2)', value: 'phone2' },
        { text: 'Observações', value: 'observations' },
        { text: 'Ativo', value: 'active'}
      ],
      items: []
    }
  },
  methods: {
    getClients() {
      this.$http
      .get('/client/read.php')
      .then(response => (this.items = response.data['records']))
      .catch(error => console.log(error));
    }
  },
  mounted() {
    this.getClients();
  }
}
</script>

<style>

</style>