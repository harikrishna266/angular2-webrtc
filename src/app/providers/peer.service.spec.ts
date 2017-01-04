/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PeerService } from './peer.service';

describe('PeerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeerService]
    });
  });

  it('should ...', inject([PeerService], (service: PeerService) => {
    expect(service).toBeTruthy();
  }));
});
