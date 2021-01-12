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
      search: ''
    }
  }
}
</script>

<style scoped>

</style>