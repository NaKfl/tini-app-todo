Component({
  props: {
    className: '',
    show: false,
    position: 'bottom',
    mask: true,
    animation: true,
    disableScroll: true
  },
  methods: {
    onTap: function onTap() {
      console.log('onTap');
    },
    _onMaskClick: function _onMaskClick() {
      if (this.props.onMaskClick) {
        this.props.onMaskClick();
      }
    }
  }
});