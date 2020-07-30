'use strict';

module.exports.nopeAPI = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(
      "Done"
    ),
  };

};
