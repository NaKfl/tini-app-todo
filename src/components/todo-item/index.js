Component({
  data: {},
  props: {},
  methods: {
    _removeItem() {
      const removeItem = this.props.removeItem;
      if (removeItem) removeItem(123);
    },
  },
});
