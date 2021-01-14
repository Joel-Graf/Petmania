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
        // #FIXME: Arrumar de acordo com API
        { text: 'Nome', value: 'name' },
        { text: 'Endereço', value: 'address' },
        { text: 'Cidade', value: 'city' },
        { text: 'UF', value: 'uf' },
        { text: 'Telefone', value: 'phone' },
        // { text: 'Telefone (2)', value: 'phone_alt' },
        { text: 'Observações', value: 'observations' },
        // { text: 'Ativo', value: 'active'}
      ],
      headers: [],
      // #FIXME: Mock do backend
      items: [
        {name: 'Teyleos Erpyu', address: 'Praça da Comunidade, 23', city: 'Cidade', uf: 'SC', phone: '111111', observations: ''},
        {name: 'Posur Nenor', address: 'Avenida João Francisco Monteles, 21', city: 'Jaraguá do Sul', uf: 'MA', phone: '2222', observations: ''},
        {name: 'Peans Teyleos', address: 'Rua General Prado, 31', city: 'Joinville', uf: 'SP', phone: '3338282', observations: ''},
        {name: 'Koman Nenor', address: 'Quadra 46', city: 'Blumenau', uf: 'AM', phone: '', observations: 'CCCCCCC'},
        {name: 'Teyleos Mufuer', address: 'Quadra QNM 40 Conjunto S', city: 'Guaramirim', uf: 'SC', phone: '321313', observations: ''},
        {name: 'Nenor Bewau', address: 'Quadra 46', city: 'São Paula', uf: 'SP', phone: '123123', observations: 'BBBBBB'},
        {name: 'Koman Wyucipao', address: 'Rua General Prado, 231', city: 'Taió', uf: 'PI', phone: '12313', observations: ''},
        {name: 'Wyucipao Zuevu', address: 'Quadra QNM 40 Conjunto S', city: 'testestes', uf: 'SC', phone: '123123', observations: ''},
        {name: 'Bewau Zuevu', address: 'Rua Aleatoria', city: 'outracidade', uf: 'PI', phone: '123123', observations: 'AAAAAA'},
        {name: 'Koman Asunmus', address: 'Endereço', city: 'cidade', uf: 'SC', phone: '123123', observations: ''},
      ]
    }
  },
  methods: {
    // #FIXME: Chamada para a API
    // getClients() {
    //   this.$http
    //   .get('/client/read.php')
    //   .then(response => (this.items = response.data['records']))
    //   .catch(error => console.log(error));
    // }
  },
  mounted() {
    this.headers = this.defaultHeaders;
    // this.getClients();
  }
}
</script>

<style>

</style>