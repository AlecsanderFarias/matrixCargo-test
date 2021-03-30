const catchException = async (error, message = "") => {
  console.log('\x1b[31m', message, error)
};

module.exports = catchException;
