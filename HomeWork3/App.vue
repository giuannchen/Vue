<template>
  <div>
    <my-select v-model="cityIndex" :data-source="cities"></my-select>
    <my-select v-model="areaIndex" :data-source="areas"></my-select>
    {{ zip }}
  </div>
</template>

<script>

import axios from 'axios';
import _ from 'lodash';
import { API } from '../src/environment';
import MySelect from './components/MySelect.vue';

const cities = [
  {
    name: '',
    areas: [{ name: '', zip: '' }],
  }];

export default {
  name: 'app',
  components: {
    MySelect,
  },
  data() {
    return {
      cityIndex: 0,
      areaIndex: 0,
    };
  },
  created() {
    const url = `${API}`;
    axios
      .get(url)
      .then((response) => {
        if (response.status === 200) {
          this.cities = response.data;
        }
      })
      .catch(e => console.log(e));
  },
  computed: {
    cities() {
      return cities;
    },
    areas() {
      return cities[this.cityIndex].areas;
    },
    zip() {
      return this.areas[this.areaIndex].zip;
    },
  },
  watch: {
    cityIndex() {
      this.areaIndex = 0;
    },
  },
};
</script>

<style>
</style>
