<template>
  <v-app>
    <!-- #TODO: Trazer os icones como arquivo local, quando cai a internet eles não carregam -->
    <!-- Nagivation Menu -->
    <v-navigation-drawer
      app
      :mini-variant="drawer"
    >
      <!-- Header -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <!-- #TODO: Inserir Logo grande e Pequeno da Empresa, ou apenas nome  -->
            Petmania
          </v-list-item-title>
          <v-list-item-subtitle>
            <!-- #TODO: Nome do sistema -->
            Petmania - Sistema de Petshop
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <!-- Menu -->
      <v-list nav>
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

      <!-- Logout -->
      <!-- #TODO: Fazer lógica de deslogar e voltar pra tela de Login -->
      <template v-slot:append>
        <v-list nav>
          <v-list-item 
            :to="'/Login'"
            link
          >
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              Deslogar
            </v-list-item-content>
          </v-list-item>
        </v-list>
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
        // #FIXME: Módulos não inclusos no MVP
        // {title: 'Planos', icon: 'mdi-gift', path: '/Plans'},
        // {title: 'Promoções', icon: 'mdi-sale', path: '/Promotions'}
      ],
    })
  }
</script>