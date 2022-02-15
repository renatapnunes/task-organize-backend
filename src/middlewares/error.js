const INTERNAL_SERVER_ERROR = 500;
const BAD_REQUEST = 400;

module.exports = async (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(BAD_REQUEST).json({ message: err.details[0].message });
  }

  if ('status' in err) {
    return res.status(err.status).end();
  }

  console.log(err);
  return res.status(INTERNAL_SERVER_ERROR).end();
};
