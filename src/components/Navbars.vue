<template lang="html">
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Vue Demo</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <nav-items v-for="(v, i) in menus" :key="i" :item="v"/>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import NavItems from './NavItems';

export default {
  components: {
    NavItems,
  },
  data() {
    return {
      menus: [
        {
          title: 'Home',
          path: '#',
        },
        {
          title: 'About',
          path: '#',
        },
        {
          title: 'Contact',
          path: '#',
        },
        {
          title: 'Dropdown',
          path: '#',
          children: [
            {
              title: 'Action',
              path: '#',
            },
            {
              title: 'Another Action',
              path: '#',
            },
          ],
        },
      ],
    };
  },
};
</script>
