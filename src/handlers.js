const {datas, lecturers} = require('./datas.js');
const rs = require('randomstring');

const getAllDatasHandler = (request, h) => {
    const response = h.response({
        status: 'success',
        data: {
            datas: datas
        }
    });

    response.code(200);
    return response;
}

const getAllLecturersHandler = (request, h) => {
    const response = h.response({
        status: 'Get Lecturer Datas Successfully',
        data: {
            datas: lecturers
        }
    });

    response.code(200);
    return response;
}

const addLecturerHandler = (request, h) => {
    const { full_name, nip, code, educational_history, core, address } = request.payload;
    const id = rs.generate({
        length: 7,
        charset: 'alphabetic'
      });
    
    if (full_name == null){
        return h.response({
            status: 'fail',
            message: 'Add Lecturer Failed',
        }).code(400)
    }

    const newLecture = { id, full_name, nip, code, educational_history, core, address };
    lecturers.push(newLecture);
    return h.response({
        'status': 'success',
        'message': 'Add Lecturer Successfully',
        'data': {
          'datas': newLecture
        }
      }).code(201);
    // const { full_name, nip, code, educational_history, core, address} = request.payload;
}

const getLecturerByIdHandler = (request, h) => {
    const { id } = request.params;
    const lecturerData = lecturers.find((lecturer) => lecturer.id === id);

    if (lecturerData !== undefined){
        return {
            status: 'success',
            data: {
              'lecturers': lecturerData
            }
        }
    }

    return h.response({
        status: 'fail',
        message: 'Lecturer Not Found'
    })
}


module.exports = { getAllDatasHandler, getAllLecturersHandler,  addLecturerHandler, getLecturerByIdHandler}