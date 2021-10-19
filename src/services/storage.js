export const getStorage = ({ key }) => {
  const localData = localStorage.getItem(key);

  if (!localData) {
    return null;
  }

  return JSON.parse(localData);
};

export const setStorage = ({ key, value }) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const deleteStorage = ({ key }) => {
  localStorage.removeItem(key);
};
