
import * as functions from 'firebase-functions';
import {db} from './init';


export const onAddLesson =
functions.firestore.document('courses/{courseId}/lessons/{lessonId}')
    .onCreate(async (snap,context) => {

        console.log("Running onAddLesson trigger ...");

        return courseTransaction(snap, (course: { lessonsCount: number; }) => {
            return {lessonsCount: course.lessonsCount + 1}
        });

    });

export const onDeleteLesson =
    functions.firestore.document('courses/{courseId}/lessons/{lessonId}')
        .onDelete(async (snap,context) => {

            console.log("Running onDeleteLesson trigger ...");

            return courseTransaction(snap, (course: { lessonsCount: number; }) => {
                return {lessonsCount: course.lessonsCount - 1}
            });

        });



function courseTransaction(snap: functions.firestore.DocumentSnapshot, cb:Function) {
    return db.runTransaction(async (transaction: { get: (arg0: any) => any; update: (arg0: any, arg1: any) => void; }) => {

        const courseRef = snap.ref.parent.parent;

        const courseSnap = await transaction.get(courseRef);

        const course = courseSnap.data();

        const changes = cb(course);

        transaction.update(courseRef, changes);

    });

}