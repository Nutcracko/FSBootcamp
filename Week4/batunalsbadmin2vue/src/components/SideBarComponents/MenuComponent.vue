<template>
  <!-- Nav Item - Dashboard -->
  <li class="nav-item active">
    <a class="nav-link" href="index.html">
      <i class="fas fa-bars" style="font-size: 19px"></i>
      <span style="font-size: 19px"> {{ menuitemtag }} </span>
    </a>
  </li>

  <!-- Divider -->
  <hr class="sidebar-divider" />
</template>

<script>
export default {
  name: "MenuComponent",
  components: {},
  props: ["menuitemtag"],
};
</script>
