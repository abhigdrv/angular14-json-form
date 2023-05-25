import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular14JsonFormComponent } from './angular14-json-form.component';

describe('Angular14JsonFormComponent', () => {
  let component: Angular14JsonFormComponent;
  let fixture: ComponentFixture<Angular14JsonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angular14JsonFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angular14JsonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
