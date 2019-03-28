"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const studentController_1 = require("../controllers/studentController");
class Routes {
    constructor() {
        this.studentController = new studentController_1.StudentController();
    }
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send('Hello World!');
        });
        // Get all children
        app.route('/api/students')
            .get(this.studentController.getStudents);
        // Create a new child
        app.route('/api/students')
            .post(this.studentController.addNewStudent);
        // get a specific child
        app.route('/api/students/:studentId')
            .get(this.studentController.getStudentById);
        // update a specific child
        app.route('/api/students/:studentId')
            .put(this.studentController.updateStudent);
        // delete a specific child
        app.route('/api/students/:studentId')
            .delete(this.studentController.deleteStudent);
        // generate dummy data
        app.route('/api/dummy')
            .get(this.studentController.generateDummyData);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=index.js.map