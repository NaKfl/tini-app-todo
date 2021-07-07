import { request } from '../../apis';

Page({
  data: {
    inputContent: '',
    list: [],
  },

  onLoad(query) {},
  async onReady() {
    this.getList();
  },
  onShow() {},
  onHide() {},
  onUnload() {},

  onInput(e) {
    this.setData({
      inputContent: e.detail.value,
    });
  },

  async removeItem(id) {
    console.log(id);
    my.showLoading({ content: 'Loading' });
    const list = await removeItemAPI(id);
    my.hideLoading();
    this.setData({
      list,
    });
  },

  async getList() {
    my.showLoading({ content: 'Loading' });
    const { data } = await request({
      path: 'task',
      method: 'GET',
    });
    my.hideLoading();
    this.setData({
      list: data,
      inputContent: '',
    });
  },

  async addItem() {
    my.showLoading();
    const { success } = await request({
      path: 'task',
      method: 'POST',
      data: {
        description: this.data.inputContent,
      },
    });
    my.hideLoading();
    if (success) {
      my.showToast({
        type: 'success',
        content: 'Add item successfully',
      });
      this.getList();
    } else {
      my.showToast({
        type: 'fail',
        content: 'Add item failed',
      });
    }
  },
});
