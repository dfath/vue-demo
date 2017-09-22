<template lang="html">
  <li v-bind:class="{ 'dropdown': isParent }">
    <a v-if="isParent" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ item.title }} <span class="caret"></span></a>
    <a v-else href="#">{{ item.title }}</a>
    <ul v-if="isParent" class="dropdown-menu">
      <nav-items v-for="(v, i) in item.children" :key="i" :item="v" />
    </ul>
  </li>
</template>

<script>
export default {
  name: 'nav-items',
  props: {
    item: '',
  },
  computed: {
    isParent() {
      return typeof this.item.children !== 'undefined';
    },
  },
};
</script>
