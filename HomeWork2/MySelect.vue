<template>
  <div >
  <select v-model="selectIndex" >
<option v-for="(item, indexkey) in options" v-bind:key=indexkey v-bind:value=indexkey>{{item.name}}
</option>
  </select>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() { return []; },
    },
    value: Number,
  },
  data() {
    return {
      options: this.list,
      selectIndex: this.value,
      selectName: '',
    };
  },
  methods: {
    emitSelectIndex() {
      this.$emit('selectIndex', this.selectIndex);
    },
    updateOptions() {
      this.options = this.list;
    },
    resetIndex() {
      this.selectIndex = 0;
    },
  },
  watch: {
    selectIndex: ['emitSelectIndex'],
    list: ['updateOptions', 'resetIndex'],
  },
};
</script>

<style scoped>

</style>
