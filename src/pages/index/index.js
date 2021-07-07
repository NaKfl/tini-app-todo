import { getListAPI, removeItemAPI } from '../../apis';

Page({
  data: {
    term: '',
    list: [],
  },
  onLoad(query) {},
  async onReady() {
    my.showLoading({ content: 'Loading' });
    const list = await getListAPI();
    my.hideLoading();
    this.setData({
      list,
    });
  },
  onShow() {},
  onHide() {},
  onUnload() {},

  async removeItem(id) {
    console.log(id);
    my.showLoading({ content: 'Loading' });
    const list = await removeItemAPI(id);
    my.hideLoading();
    this.setData({
      list,
    });
  },
});
