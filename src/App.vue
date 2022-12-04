<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { reactive } from 'vue';
import {useTestStore} from './stores/store'
import LoginView from './views/Logs/LoginView.vue'


const store = useTestStore()
let drawer = reactive({toggle: true})
let rail = reactive({togg: true})


</script>

<template>
  <v-app v-if="store.isLogged" class="application">
    <!------Sidebar navigation-->
    <v-navigation-drawer
        expand-on-hover
        v-model="drawer.toggle"
        permanent
        :rail="rail.togg"
        class="bg-grey-darken-3"
      >
      <!------Porfile avatar-->
        <v-list-item
          prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
          title="Youv Ch"
          subtitle="Admin"
          nav
        ></v-list-item>

        <v-divider></v-divider>
        <!------Navigation list-->
        <v-list density="compact" nav>
          <RouterLink to="/" class="link">
              <v-tooltip v-if="rail.togg"
                activator="parent"
                location="end"
                >Dashboard
              </v-tooltip>
              <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="Dashboard"></v-list-item>
          </RouterLink>

          <!------navigation Group-->
          <v-list-group value="Leads">
            <template v-slot:activator="{props}">
              <v-tooltip v-if="rail.togg"
                  activator="parent"
                  location="end"
                  >Leads
              </v-tooltip>
              <v-list-item v-bind="props" prepend-icon="mdi-account-group-outline" title="Leads">
              </v-list-item>
            </template>
            <v-list-item title="Leads List" value="Leads List"></v-list-item>
            <v-list-item title="Leads Invoice" value="Leads Invoice"></v-list-item>
          </v-list-group>

          <v-list-group value="Calendars">
            <template v-slot:activator="{props}">
              <v-tooltip v-if="rail.togg"
                  activator="parent"
                  location="end"
                  >Calendars
                </v-tooltip>
              <v-list-item v-bind="props" prepend-icon="mdi-calendar-month" title="Calendars" value="Calendars">
              </v-list-item>
            </template>
            <RouterLink to="/calendar" class="link">
               <v-list-item title="Grid's Work" value="Grid's Work"></v-list-item>
            </RouterLink>
          </v-list-group>

          
          <RouterLink to="/tables" class="link">
            <v-tooltip v-if="rail.togg"
                activator="parent"
                location="end"
                >tables
              </v-tooltip>
            <v-list-item prepend-icon="mdi-table-cog" title="Tables" value="Tables"></v-list-item>
          </RouterLink>
        </v-list>
      </v-navigation-drawer>

      <!------navigation bar-->
      <v-app-bar :elevation="9">
          <!--------Closing sideBar button---------->
          <template v-slot:prepend>
            <v-app-bar-nav-icon v-if="rail.togg" @click.stop="rail.togg= !rail.togg"></v-app-bar-nav-icon>
            <v-app-bar-nav-icon v-else @click.stop="rail.togg = !rail.togg" icon="mdi-window-close"></v-app-bar-nav-icon>
          </template>
          <!--------App bar actions--------->
          <template v-slot:append>
            <!-----Notification Menu-------->
            <v-btn icon="mdi-bell-outline">
              <v-badge content="99" color="error">
                <v-icon></v-icon>
              </v-badge>
            </v-btn>
            
            <!----Account Menu------->
            <v-menu>
              <template v-slot:activator="{props}">
                <v-btn v-bind="props" icon="mdi-account-circle-outline">
                </v-btn>
              </template>
              <v-list>
                <v-list-item >
                  <div class="option">
                    <v-icon icon="mdi-account-cog-outline" size="small"></v-icon>
                    <v-list-item-title ><RouterLink to="/" class="link">Profile</RouterLink></v-list-item-title>
                  </div>
                </v-list-item>

                <v-list-item >
                  <div class="option">
                    <v-icon icon="mdi-logout" size="small"></v-icon>
                    <v-list-item-title><RouterLink to="/" class="link">Logout</RouterLink></v-list-item-title>
                  </div>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
      </v-app-bar>


    <!-----Main layout-->
    <v-main class="main-container">
      <RouterView />
    </v-main>
  </v-app>

  <div v-else class="login-view">
    <LoginView/>
  </div>

</template>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.application {
  font-family: 'Montserrat', sans-serif;
}

.link {
  text-decoration: none;
  color: inherit;
}
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.option {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
.main-container {
  background-color: #EEF5F9;
}
</style>
