<template>
  <!-- Content Wrapper -->
  <div id="content-wrapper" class="d-flex flex-column">
    <!-- Main Content -->
    <div id="content">
      <TopBarComponent />
      <!-- Begin Page Content -->
      <HeroSectionComponent />
    </div>
  </div>
  <!-- End of Content Wrapper -->
</template>

<script>
import TopBarComponent from "./ContentWrapperComponents/TopBarComponent.vue";
import HeroSectionComponent from "./ContentWrapperComponents/HeroSectionComponent.vue";

export default {
  name: "ContentWrapperComponent",
  components: { TopBarComponent, HeroSectionComponent },
};
</script>

<style></style>
