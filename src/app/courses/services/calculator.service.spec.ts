import {CalculatorService} from './calculator.service';
import {LoggerService} from './logger.service';
import {TestBed} from '@angular/core/testing';

// Test Suite
describe('CalculatorService', () => {

  let calculator: CalculatorService,
  loggerSpy: any;

  // Runs before each functional specification
  beforeEach(() => {
    console.log('Called before each test');

    // Creates the Mock LoggerService
     loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);

     // Dependency injection of both the calculator and the Mocked LoggerService
     TestBed.configureTestingModule({
       providers: [
         CalculatorService,
         {provide: LoggerService, useValue: loggerSpy}
       ]
     });

     calculator = TestBed.get(CalculatorService);
  });

  // Functional Specification ADD
  it('should add two numbers', () => {
    console.log('add test');
    //Act
    const result = calculator.add(2, 2);

    //Assert
    expect(result).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);

  });

  // Functional Specification SUBTRACT
  it('should subtract two numbers', () => {
  console.log('subtract test');
    const result = calculator.subtract(2, 2);

    expect(result).toBe(0);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

});
