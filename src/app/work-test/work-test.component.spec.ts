import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTestComponent } from './work-test.component';

describe('WorkTestComponent', () => {
  let component: WorkTestComponent;
  let fixture: ComponentFixture<WorkTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
