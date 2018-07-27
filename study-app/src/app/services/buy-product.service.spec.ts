import { TestBed, inject } from '@angular/core/testing';

import { BuyProductService } from './buy-product.service';

describe('BuyProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuyProductService]
    });
  });

  it('should be created', inject([BuyProductService], (service: BuyProductService) => {
    expect(service).toBeTruthy();
  }));
});
