const fakeAPI = (response) => {
  setTimeout(() => {});
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, 100);
  });
};

const list = [
  {
    id: '1',
    content: 'Going to bed',
  },
  {
    id: '2',
    content: 'Eating some thing',
  },
];

export const getListAPI = async () => {
  return await fakeAPI(list);
};

export const removeItemAPI = async (id) => {
  const pos = list.findIndex((item) => item.id === id);
  if (pos !== -1) {
    const newList = [...list.slice(0, pos), ...list.slice(pos + 1)];
    return newList;
  }
  return list;
};
