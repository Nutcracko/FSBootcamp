<template>
  <link
    href="vendor/fontawesome-free/css/all.min.css"
    rel="stylesheet"
    type="text/css"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
    rel="stylesheet"
  />

  <div id="wrapper">
    <SideBarComponent />
    <ContentWrapperComponent />
  </div>
</template>

<script>
import SideBarComponent from "./components/SideBarComponent.vue";
import ContentWrapperComponent from "./components/ContentWrapperComponent.vue";

export default {
  name: "App",
  components: { SideBarComponent, ContentWrapperComponent },
  mounted() {
    //!Loading Scripts that BSAdmin uses

    //Bootstrap core JS
    let bsScript = document.createElement("script");
    bsScript.setAttribute("src", "../public/vendor/jquery/jquery.min.js");
    document.head.appendChild(bsScript);

    let bsScript2 = document.createElement("script");
    bsScript2.setAttribute(
      "src",
      "../public/vendor/bootstrap/js/bootstrap.bundle.min.js"
    );
    document.head.appendChild(bsScript2);

    //Core plugin JavaScript
    let pluginScript = document.createElement("script");
    pluginScript.setAttribute(
      "src",
      "../public/vendor/jquery-easing/jquery.easing.min.js"
    );
    document.head.appendChild(pluginScript);

    //Custom scripts for all pages
    let pageScript = document.createElement("script");
    pageScript.setAttribute("src", "../public/js/sb-admin-2.min.js");
    document.head.appendChild(pageScript);

    //Page Level Plugins
    let pagelevelScript = document.createElement("script");
    pagelevelScript.setAttribute(
      "src",
      "../public/vendor/chart.js/Chart.min.js"
    );
    document.head.appendChild(pagelevelScript);

    //Page Level Custom Scripts
    let pagecustomScript = document.createElement("script");
    pagecustomScript.setAttribute(
      "src",
      "../public/js/demo/chart-area-demo.js"
    );
    document.head.appendChild(pagecustomScript);

    let pagecustomScript2 = document.createElement("script");
    pagecustomScript2.setAttribute(
      "src",
      "../public/js/demo/chart-pie-demo.js"
    );
    document.head.appendChild(pagecustomScript2);
  },
};
</script>

//couldn't split the style since its is overwritten in many fields. Therefore,
stylesheet is called in template
<style>
@import "../public/css/sb-admin-2.min.css";
@import "../public/css/sb-admin-2.css";
</style>
