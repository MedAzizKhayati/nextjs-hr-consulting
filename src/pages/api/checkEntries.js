export default (body, keys) => {
  for (const key of keys) {
    if (!body[key]) {
      return key;
    }
  }
  return '';
};
