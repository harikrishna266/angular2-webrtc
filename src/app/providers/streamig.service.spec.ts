/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StreamigService } from './streamig.service';

describe('StreamigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StreamigService]
    });
  });

  it('should ...', inject([StreamigService], (service: StreamigService) => {
    expect(service).toBeTruthy();
  }));
});
