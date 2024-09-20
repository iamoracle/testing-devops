const getDate = () => {
  const date = new Date();
  return date.toUTCString();
};

module.exports = { getDate };
