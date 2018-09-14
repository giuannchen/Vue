<template>
  <select v-model="selectedIndex">
    <option v-for="(item, index) in dataSource" :value="index" :key="index">
      {{ item.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'MySelect',
  props: [
    'value',
    'dataSource',
  ],
  computed: {
    selectedIndex: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>

<style scoped>
</style>
