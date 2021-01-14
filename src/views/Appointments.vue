<template>
  <div>
    <AppTable 
      :filters="'Atendimentos'"
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
        { text: 'Cliente', value: 'client' },
        { text: 'Pet', value: 'pet' },
        { text: 'Serviço', value: 'service' },
        { text: 'Data', value: 'date' },
        { text: 'Hora', value: 'hour' },
        { text: 'Observações', value: 'observations' },
      ],
      headers: [],
      // #FIXME: Mock do backend
      items: [
        {client: 'Teyleos Erpyu', pet: 'Chacorro', service: 'Banho e Tosa', date: '10/12/2020', hour:'14:00', observations: ''},
        {client: 'Joel joel', pet: 'Doguinho', service: 'Tosa Higiênica', date: '12/03/2021', hour:'10:00', observations: 'Cliente vai atrasar'},
        {client: 'Teste Mel', pet: 'Sacolinha', service: 'Banho - Porte Médio', date: '03/06/2021', hour:'16:30', observations: ''},
        {client: 'João da Silva', pet: 'Garfield', service: 'Banho e Tosa', date: '15/08/2021', hour:'08:15', observations: 'Esse cliente está devendo'},
      ]
    }
  },
  mounted() {
    this.headers = this.defaultHeaders;
  }
}
</script>

<style>

</style>