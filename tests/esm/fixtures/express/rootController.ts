import { Controller, Get, Route } from '@tsoa/runtime';
import type { TestModel } from '../testModel.js';
import {Observable, of} from "rxjs";

@Route()
export class RootController extends Controller {
  // @Get()
  // public rootHandler(): Observable<TestModel> {
  //   return of({
  //     str: 'str',
  //   });
  // }

  @Get()
  public async childHandler(): Promise<TestModel> {
    return {
      str: 'str',
    };
  }
}
