import getI18n from '../_util/getI18n';
var i18n = getI18n().avatar;
var imageSize = {
  xs: 40,
  sm: 48,
  md: 56,
  lg: 72
};
Component({
  data: {
    _borderRadius: '4px'
  },
  props: {
    shape: 'circle',
    size: 'md',
    src: 'https://salt.tikicdn.com/ts/miniapp/0f/7f/84/5af725e8a6a55815a24e8e6935ef99e3.png',
    name: '',
    desc: '',
    lazyLoad: false,
    style: ''
  },
  deriveDataFromProps: function deriveDataFromProps(nextProps) {
    if (nextProps.shape === 'circle') {
      this.setData({
        _borderRadius: imageSize[nextProps.size || 'md'] / 2 + "px"
      });
    } else {
      this.setData({
        _borderRadius: '4px'
      });
    }
  },
  didMount: function didMount() {
    var _this$props = this.props,
        name = _this$props.name,
        desc = _this$props.desc;

    if (!name && desc) {
      console.error(i18n.error);
    }
  },
  methods: {
    _onError: function _onError(e) {
      var onError = this.props.onError;

      if (onError) {
        onError(e);
      }
    }
  }
});