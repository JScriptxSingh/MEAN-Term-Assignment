"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//   /app/controllers/studentController.ts
const mongoose = __importStar(require("mongoose"));
const student_1 = require("../models/student");
const StudentMongooseModel = mongoose.model('Student', student_1.StudentSchema);
class StudentController {
    addNewStudent(req, res) {
        let newStudent = new StudentMongooseModel(req.body);
        /*
        let newStudent = new StudentMongooseModel({
            "FirstName": "Tom",
            "LastName": "Baker",
            "School": "45 River Road",
            "StartDate": "2001-11-17T19:23:15.118Z"
        });
        */
        newStudent.save((err, data) => {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }
    getStudents(req, res) {
        StudentMongooseModel.find({}, (err, data) => {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }
    getStudentById(req, res) {
        StudentMongooseModel.findById(req.params.studentId, (err, data) => {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }
    updateStudent(req, res) {
        StudentMongooseModel.findOneAndUpdate({ _id: req.params.studentId }, req.body, { new: true }, (err, data) => {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }
    deleteStudent(req, res) {
        StudentMongooseModel.findOneAndRemove({ _id: req.params.stiudentId }, (err, data) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted student!' });
        });
    }
    generateDummyData(req, res) {
        var data = [
            {
                "FirstName": "Sally",
                "LastName": "Baker",
                "School": "Mining",
                "StartDate": new Date("2012-02-20T08:30:00")
            }, {
                "FirstName": "Jason",
                "LastName": "Plumber",
                "School": "Engineering",
                "StartDate": new Date("2018-03-17T17:32:00")
            }, {
                "FirstName": "Sue",
                "LastName": "Gardner",
                "School": "Political Science",
                "StartDate": new Date("2014-06-20T08:30:00")
            }, {
                "FirstName": "Linda",
                "LastName": "Farmer",
                "School": "Agriculture",
                "StartDate": new Date("2014-06-20T08:30:00")
            }, {
                "FirstName": "Fred",
                "LastName": "Fisher",
                "School": "Environmental Sciences",
                "StartDate": new Date("2017-10-16T17:32:00")
            }
        ];
        StudentMongooseModel.collection.insert(data, function (err, docs) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully generated 5 sample documents!' });
        });
    }
}
exports.StudentController = StudentController;
//# sourceMappingURL=studentController.js.map