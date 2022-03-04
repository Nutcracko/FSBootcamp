<template>
  <!-- Sidebar - Brand -->
  <a
    class="sidebar-brand d-flex align-items-center justify-content-center"
    href="index.html"
  >
    <div class="sidebar-brand-icon rotate-n-15">
      <i class="fas fa-laugh-wink"></i>
    </div>
    <div class="sidebar-brand-text mx-3">{{ brandname }}</div>
  </a>
  <!-- Divider -->
  <hr class="sidebar-divider my-0" />
</template>

<script>
export default {
  name: "BrandComponent",
  components: {},
  props: ["brandname"],
};
</script>
