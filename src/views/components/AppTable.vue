<template>
  <v-card>
    <v-card-title>
      {{filters}}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Pesquisar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
  props: {
    // #TODO: Only the filters Inputs, the actual filters go in the Headers Array.
    filters: {
      type: String
      // type: Array,
      // required: true
    },
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      search: '',
      // Data passed by props
      tb_filters: '',
      tb_headers: [],
      tb_items: []
    }
  },
  methods: {
    refresh() {
      //#TODO: Fazer lógica de atualização de dados com $emit 
    },
  },
  mounted() {
    this.tb_filters = this.filters;
    this.tb_headers = this.headers;
    this.tb_items = this.items;
  }
}
</script>

<style>

</style>