module.exports = (
  res,
  {
    statusCode = 200,
    success = true,
    message = "",
    data = null,
    pagination = null,
  }
) => {
  return res.status(statusCode).json({
    success,
    message,
    data,
    pagination,
  });
};
