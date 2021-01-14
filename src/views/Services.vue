<template>
  <div>
    <AppTable 
      :filters="'Serviços'"
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
        { text: 'Observações', value: 'observations' },
        { text: 'Valor', value: 'value'}
      ],
      headers: [],
      // #FIXME: Mock do backend
      items: [
        {name: 'Banho - Porte Pequeno', observations: 'Apenas cachorros menores de 30cm', value: '23,00'},
        {name: 'Banho(P) + Tosa', observations: 'Apenas cachorros menores de 30cm', value: '12,00'},
        {name: 'Banho - Porte Médio', observations: 'Apenas cachorros entre 30cm e 50cm', value: '34,00'},
        {name: 'Transporte Pet', observations: 'Valor base. Valor adicional: 1km = R$2,00', value: '5,00'},
        {name: 'Tosa Higiênica', observations: '', value: '5,50'}
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