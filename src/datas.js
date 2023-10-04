const lecturers = [];


const datas = 
    {
        "name": "Computer Engineering",
        "faculty": "Engineering",
        "mhs_total": 3000,
        "lecturers": lecturers,
        "course": {
            "mandatory": {
              "semester": {
                "1": [],
                "2": [],
                "3": [],
                "4": [],
                "5": [],
                "6": [],
                "7": [],
                "8": [],
              },
              "total_course": 0
            },
            "optional": {
              "semester": {
                "odd": [],
                "even": []
              },
              "total_course": 0
            }
          }
    }

module.exports = { datas, lecturers }