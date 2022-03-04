<template>
  <!-- Topbar -->
  <nav
    class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
  >
    <!-- Sidebar Toggle (Topbar) -->
    <button
      id="sidebarToggleTop"
      class="btn btn-link d-md-none rounded-circle mr-3"
    >
      <i class="fa fa-bars"></i>
    </button>
    <SearchBarComponent />
    <NavBarComponent />
  </nav>
  <!-- End of Topbar -->
</template>

<script>
import SearchBarComponent from "./TopBarComponents/SearchBarComponent.vue";
import NavBarComponent from "./TopBarComponents/NavBarComponent.vue";

export default {
  name: "TopBarComponent",
  components: { SearchBarComponent, NavBarComponent },
};
</script>
