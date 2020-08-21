'use strict';

const jwt = require('jsonwebtoken');

module.exports.handler = async event => {

  const tokenVerified = verifyToken(event);

  if (tokenVerified.decoded) {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Time to submit a form',
          input: event,
        },
        null,
        2
      ),
    };
  }

  return {
    statusCode: 403,
    body: JSON.stringify(
      {
        message: 'Forbidden',
        input: event,
      },
      null,
      2
    ),
  };
};

const verifyToken = (event) => {
  if (event.headers && event.headers.Authorization) {
    const bearerHeader = event.headers.Authorization;
    if (typeof bearerHeader !== 'undefined') {

      const token = bearerHeader.split(' ')[1];

      try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        return {"decoded": decoded}
      } catch(err) {
        return {"error": err}
      }
    }
    else return {"error": "Forbidden. Bearer Header is undefined."}
  }
  else return {"error": "Forbidden. Authorization missing in header."}
}
