<template>
  <!-- Topbar Navbar -->
  <ul class="navbar-nav ml-auto">
    <AlertsComponent />
    <MessagesComponent />

    <div class="topbar-divider d-none d-sm-block"></div>

    <UserInformationComponent />
  </ul>
</template>
<script>
import AlertsComponent from "./NavBarComponents/AlertsComponent.vue";
import MessagesComponent from "./NavBarComponents/MessagesComponent.vue";
import UserInformationComponent from "./NavBarComponents/UserInformationComponent.vue";

export default {
  name: "NavBarComponent",
  components: { AlertsComponent, MessagesComponent, UserInformationComponent },
};
</script>
