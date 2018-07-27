import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketFullComponent } from './bucket-full.component';

describe('BucketFullComponent', () => {
  let component: BucketFullComponent;
  let fixture: ComponentFixture<BucketFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
