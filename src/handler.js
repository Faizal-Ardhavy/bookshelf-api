/* eslint-disable linebreak-style */
/* eslint-disable no-else-return */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable space-infix-ops */
/* eslint-disable space-before-blocks */
/* eslint-disable keyword-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/newline-after-import */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const { nanoid } = require('nanoid');
const book = require('./book');
const addBookHandler = (request, h) => {
    const {name, year, author, summary, publisher, pageCount, readPage, reading} = request.payload;
    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    if(pageCount>=readPage){
        const finished=true;
    }else{
        const finished=false;
    }
    const newBook = {
        name, year, author, summary, publisher, pageCount, readPage, reading, id, insertedAt, updatedAt, finished
      };
      book.push(newBook);
    const isSuccess = book.filter((book) => book.id === id).length > 0;
    if (isSuccess) {
        const response = h.response({
          status: 'success',
          message: 'Buku berhasil ditambahkan',
          data: {
            bookId: id,
          },
        });
        response.code(201);
        return response;
    }else if(newBook.name===""){
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku',
          });
          response.code(400);
          return response;
    }else if(newBook.readPage>newBook.pageCount){
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
          });
          response.code(400);
          return response;
    }
    const response = h.response({
        status: 'error',
        message: 'Buku gagal ditambahkan',
        });
        response.code(500);
        return response;
};
module.exports = { addBookHandler };