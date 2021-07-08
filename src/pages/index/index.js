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
      this.getList();
    } else {
      my.showToast({
        type: 'fail',
        content: 'Add item failed',
      });
    }
  },

  async removeItem(id) {
    my.showLoading({ content: 'Loading' });
    const { success } = await request({
      path: `task/${id}`,
      method: 'DELETE',
    });
    my.hideLoading();
    if (success) {
      this.getList();
    } else {
      my.showToast({
        type: 'fail',
        content: 'Remove item failed',
      });
    }
  },

  async editItem(id, description) {
    my.showLoading();
    const { success } = await request({
      path: `task/${id}`,
      method: 'PUT',
      data: {
        description: description,
      },
    });
    my.hideLoading();
    if (success) {
      this.getList();
    } else {
      my.showToast({
        type: 'fail',
        content: 'Edit item failed',
      });
    }
  },
});
