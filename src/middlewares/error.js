const INTERNAL_SERVER_ERROR = 500;

module.exports = async (err, _req, res, _next) => {  
  console.log(err);
  return res.status(INTERNAL_SERVER_ERROR).end();
};
