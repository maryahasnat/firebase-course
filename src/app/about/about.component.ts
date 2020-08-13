import { Component, OnInit, ViewEncapsulation } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/firestore';
//import { Course } from 'app/model/course';

/* import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { Course } from 'app/model/course';

const config = {
  apiKey: "AIzaSyDjibbME-nvx_pzRz6SOy9jCP8RPyEb7eo",
  authDomain: "fir-course-1030f.firebaseapp.com",
  databaseURL: "https://fir-course-1030f.firebaseio.com",
  projectId: "fir-course-1030f",
  storageBucket: "fir-course-1030f.appspot.com",
  messagingSenderId: "810871003343",
  appId: "1:810871003343:web:c91118f3d40e7ffb857fba"
}; 

firebase.initializeApp(config);
const db = firebase.firestore();
*/

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    //private db: AngularFirestore
    ) {
/*       //valueChanges observable
      this.db.collection('courses')
          .valueChanges()
          .subscribe(snaps=> console.log(snaps));
    

        //snapshotChanges observable - returns the complete collection - returns whole collection even if 1 record modified
        this.db.collection('courses')
          .snapshotChanges()
          .subscribe(snaps=> {
            const courses: Course[] = snaps.map(
                                        snap=>{
                                          return <Course> {
                                            id: snap.payload.doc.id,
                                            ...snap.payload.doc.data() as Course
                                          }
                                        })
            console.log(courses)
            });
        
        //stateChanges observable - returns the incremental collection - if 1 record modified, it will return only 1
        this.db.collection('courses')
        .stateChanges()
        .subscribe(snaps=> {
          const courses: Course[] = snaps.map(
                                      snap=>{
                                        return <Course> {
                                          id: snap.payload.doc.id,
                                          ...snap.payload.doc.data() as Course
                                        }
                                      })
          console.log(courses)
          });
 */      

      
  }

  ngOnInit() {
    //db.doc('courses').get().then(snap => console.log(snap.data()));
    /* db.collection('courses').get()
      .then(snap => {
        const courses: Course[] = snap.docs.map(
          snap=> {
            return <Course>{
              id: snap.id,
              ...snap.data()
            }
          }
        );

        console.log(courses.sort());
        //console.log(snap.docs.map(snap=>snap.data()))
      }); */
  }

}
