Component({
  props: {},
  methods: {
    _onRemoveItem() {
      const { onRemoveItem, id } = this.props;
      if (typeof onRemoveItem === 'function' && id) onRemoveItem(id);
    },
    _onEditItem() {
      my.prompt({
        title: 'Edit',
        placeholder: this.props.description,
        okButtonText: 'Save',
        cancelButtonText: 'Cancel',
        success: (res) => {
          const { onEditItem, id } = this.props;
          if (typeof onEditItem === 'function' && id)
            onEditItem(id, res.inputValue);
        },
      });
    },
  },
});
