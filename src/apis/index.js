const BASE_URL = 'https://api-nodejs-todolist.herokuapp.com';
export const request = ({ path, method, token, data }) => {
  return new Promise((resolve, reject) => {
    my.request({
      method,
      data,
      url: `${BASE_URL}/${path}`,
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token || getApp().authentication.token}`,
      },
      success: (res) => resolve(res),
      fail: (err) => reject(err),
    });
  });
};
