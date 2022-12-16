export default function promisifyRequest(handler) {
  return (req, res, next) => {
    handler(req, res, next).catch((error) => {
      console.error('error handling request', error);
      res.status(500).send('internal server error');
    });
  };
}
