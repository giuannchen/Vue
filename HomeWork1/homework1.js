new Vue({
  el: '#homework1',
  data: {
    todo: '',
	items: [
      'Template',
      'Vue Instance',
      'Vue Component'
    ]
  },
  methods: {
    add: function () {
      this.items.push(this.todo);
    },
	del: function (item) {
      this.items.splice(this.items.indexOf(item), 1);
    }
  }
});