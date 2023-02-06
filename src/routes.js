/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable indent */

const { addBookHandler } = require("./handler");

/* eslint-disable linebreak-style */
const routes = [
    {
      method: 'POST',
      path: '/book',
      handler: addBookHandler,
    },
  ];
   // eslint-disable-next-line no-trailing-spaces
   
  module.exports = routes;