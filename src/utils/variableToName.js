export default (variable) => {
  const variableName = variable
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, function (str) {
      return str.toUpperCase();
    });
  return variableName;
};
