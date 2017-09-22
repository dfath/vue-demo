<template lang="html">
  <div class="row">
    <div class="col-md-12">
      <navbars/>
      <searchs/>
      <table class="table table-striped">
        <thead>
          <tr>
            <td>Name</td>
            <td>Desc</td>
            <td>Star</td>
          </tr>
        </thead>
        <tbody>
          <tr v-if="items" v-for="(v, i) in items" :key="i">
            <td>{{ v.full_name }}</td>
            <td>{{ v.description }}</td>
            <td>{{ v.stargazers_count }}</td>
          </tr>
          <tr v-else>
            <td colspan="3">Data not found</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Navbars from './Navbars';
import Searchs from './Searchs';
import Pages from './Pages';

export default {
  components: {
    Navbars,
    Searchs,
    Pages,
  },
  data() {
    return {
      repositories: '',
    };
  },
  created() {
    axios.get('https://api.github.com/search/repositories?q=vue')
      .then((response) => {
        console.log(response);
        this.repositories = response.data;
      });
  },
  computed: {
    items() {
      return this.repositories.items;
    },
  },
};
</script>

<style lang="css">
</style>
