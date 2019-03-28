// /app/routes/index.ts
import {Request, Response} from "express";
import {StudentController} from '../controllers/studentController';

export class Routes { 
    studentController: StudentController = new StudentController();

    public routes(app: any): void { 
        app.route('/')

        .get(this.studentController.getStudents);
            // .get((req: Request, res: Response) => {            
            //     //res.status(200).send('Hellooooooooooo World!');
            //     res.render("index",{

            //     });
        // });  
             
        // Get all children
        app.route('/api/students')
        .get(this.studentController.getStudents);

        // Create a new child
        app.route('/addStudent')
        .post(this.studentController.addNewStudent);

        // get a specific child
        app.route('/edit/:studentId')
        .get(this.studentController.getStudentById);

         // Create
         app.route('/create')
         .get(this.studentController.getCreateView);
 

        // update a specific child
        app.route('/update')
        .post(this.studentController.updateStudent);

        app.route('/delete/:studentId')
        .get(this.studentController.getDeleteStudent);

        // delete a specific child
        app.route('/delete')
        .post(this.studentController.deleteStudent);

        // generate dummy data
        app.route('/api/dummy')
        .get(this.studentController.generateDummyData);

    }
}
