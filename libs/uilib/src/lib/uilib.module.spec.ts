import { async, TestBed } from '@angular/core/testing';
import { UilibModule } from './uilib.module';

describe('UilibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UilibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UilibModule).toBeDefined();
  });
});
