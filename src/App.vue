<template>
  <v-app>
    <!-- Nagivation Menu -->
    <v-navigation-drawer
      app
      :mini-variant="drawer"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Petmania
          </v-list-item-title>
          <v-list-item-subtitle>
            Petmania - Sistema de Petshop
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to='item.path'
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              {{item.title}}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- #TODO: Fazer lógica de deslogar e voltar pra tela de Login -->
      <template v-slot:append>
        <v-list-item 
          link
          :to="'/Login'"
        >
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            Deslogar
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-navigation-drawer>

    <!-- App Bar -->
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{this.$route.name}}</v-toolbar-title>
    </v-app-bar>

    <!-- App Content -->
    <v-main>   
      <v-container fluid>
        <transition name='slide-x-transition' mode='out-in'>
          <router-view></router-view>
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      items: [
        {title: 'Atendimentos', icon: 'mdi-calendar-clock', path: '/'},
        {title: 'Clientes', icon: 'mdi-account-group', path: '/Clients'},
        {title: 'Pets', icon: 'mdi-paw', path: '/Pets'},
        {title: 'Serviços', icon: 'mdi-offer', path: '/Services'},
        {title: 'Planos', icon: 'mdi-gift', path: '/Plans'},
        {title: 'Promoções', icon: 'mdi-sale', path: '/Promotions'}
      ],
    })
  }
</script>