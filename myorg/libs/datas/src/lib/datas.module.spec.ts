import { async, TestBed } from '@angular/core/testing';
import { DatasModule } from './datas.module';

describe('DatasModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DatasModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DatasModule).toBeDefined();
  });
});
