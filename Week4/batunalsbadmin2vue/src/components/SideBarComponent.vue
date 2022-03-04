<template>
  <ul
    class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    id="accordionSidebar"
    style="background: #bb86fc"
  >
    <BrandComponent brandname="SBAdmin2Vue" />
    <MenuComponent menuitemtag="Dashboard" />
    <MenuComponent menuitemtag="About Us" />
  </ul>
</template>

<script>
import BrandComponent from "./SideBarComponents/BrandComponent.vue";
import MenuComponent from "./SideBarComponents/MenuComponent.vue";

export default {
  name: "SideBarComponent",
  components: { BrandComponent, MenuComponent },
};
</script>

<style></style>
