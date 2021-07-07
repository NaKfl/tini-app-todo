// eslint-disable-next-line @typescript-eslint/no-empty-interface
var defaultProps = {
  type: 'solid',
  shape: 'pill',
  size: 'large',
  skeleton: false,
  loading: false,
  disabled: false,
  onTap: function onTap() {}
};
var componentOptions = {
  props: defaultProps,
  methods: {
    onTap: function onTap(e) {
      this.props.onTap(e);
    }
  }
};
Component(componentOptions);