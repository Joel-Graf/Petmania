<template>
  <div>
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
      defaultHeaders: [
        { text: 'Nome', value: 'name' },
        { text: 'Endereço', value: 'address' },
        { text: 'Cidade', value: 'city' },
        { text: 'UF', value: 'uf' },
        { text: 'Telefone', value: 'phone' },
        { text: 'Telefone (2)', value: 'phone_alt' },
        { text: 'Observações', value: 'observations' },
        { text: 'Ativo', value: 'active'}
      ],
      headers: [],
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
    this.headers = this.defaultHeaders;
    this.getClients();
  }
}
</script>

<style>

</style>