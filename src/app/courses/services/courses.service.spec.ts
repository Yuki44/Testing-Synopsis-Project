import {CoursesService} from './courses.service';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {COURSES} from '../../../../server/db-data';
import {Course} from '../model/course';
import {HttpErrorResponse} from '@angular/common/http';

describe('CoursesService', () => {

  let coursesService: CoursesService,
    httpTestingController: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CoursesService

      ]
    });
    coursesService = TestBed.get(CoursesService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('Should retrieve all cooking courses', () => {

    coursesService.findAllCourses().subscribe(courses => {

      // Assert that the data returned is not null or undefined etc
      expect(courses).toBeTruthy('No cooking courses returned');

      // Assert that the amount of courses retrieved is the same as in the database
      expect(courses.length).toBe(6, 'Incorrect number of cooking courses');

      // Assert we can find a specific course and its description matches
      const course = courses.find(course => course.id == 2);
      expect(course.titles.description).toBe('Pasta Carbonara');
    });

    // Assert that HTTP Get request is only called once
    const req = httpTestingController.expectOne('/api/courses');
    expect(req.request.method).toEqual('GET');

    // Specify which test data should be returned when the URL is called by the mock http client
    req.flush({payload: Object.values(COURSES)});
  });

  it('Should save the course data', () => {

    const changes :Partial<Course> =
      {titles:{description: 'Testing Course Saving' }};

    coursesService.saveCourse(2, changes)
      .subscribe(course => {

        expect(course.id).toBe(2);

      });

    const req = httpTestingController.expectOne('/api/courses/2');

    expect(req.request.method).toEqual("PUT");

    expect(req.request.body.titles.description)
      .toEqual(changes.titles.description);

    req.flush({
      // Spread operator ...
      ...COURSES[2],
      ...changes
    })

  });

  it('Should give an error if save course fails', () => {

    const changes :Partial<Course> =
      {titles:{description: 'Testing Course Saving'}};

    coursesService.saveCourse(2, changes)
      .subscribe(
        () => fail("the save course operation should have failed"),

        (error: HttpErrorResponse) => {
          expect(error.status).toBe(500);
        }
      );

    const req = httpTestingController.expectOne('/api/courses/2');

    expect(req.request.method).toEqual("PUT");

    req.flush('Save course failed', {status:500,
      statusText:'Internal Server Error'});
  });

  afterEach(() => {
    httpTestingController.verify();
  });

});
