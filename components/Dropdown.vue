<template>
  <div class="main-dropdown">
    <button class="main-dropdown__main-link bg-white w-100">
      {{ title }}
      <span class="icon ml-2 text-dark">
        <i class="fas fa-chevron-down"></i>
      </span>
    </button>
    <div class="dropdown-content">
      <nuxt-link v-for="(item, index) in items" :key="index" to="/">{{ item }}</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title', 'items']
  }
</script>

<style lang="scss">
  .main-dropdown {
    position: relative;
    display: inline-block;

    &__main-link {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: black;
      font-size: 1em;
      border: none;
      margin-bottom: .7rem;
    }
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    min-width: 200px;
    width: 100%;
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 100;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {background-color: #ddd;}

  /* Show the dropdown menu on hover */
  .main-dropdown:hover .dropdown-content {display: block;}

  /* Change the background color of the dropdown button when the dropdown content is shown */
  .main-dropdown:hover .dropbtn {background-color: #3e8e41;}
</style>
