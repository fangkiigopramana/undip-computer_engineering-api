const { getAllDatasHandler, addLecturerHandler, getLecturerByIdHandler, getAllLecturersHandler } = require("./handlers");

const routes = [
    {
        method: 'GET', // This specifies the HTTP method
        path: '/',     // This specifies the URL path
        handler: getAllDatasHandler
    },
    {
        method: 'GET', // This specifies the HTTP method
        path: '/lecturers',     // This specifies the URL path
        handler: getAllLecturersHandler
    },
    {
        method: 'POST', // This specifies the HTTP method
        path: '/lecturer',     // This specifies the URL path
        handler: addLecturerHandler
    },
    {
        method: 'GET', // This specifies the HTTP method
        path: `/lecturers/{id}`,     // This specifies the URL path
        handler: getLecturerByIdHandler
    },

];

module.exports = routes;
