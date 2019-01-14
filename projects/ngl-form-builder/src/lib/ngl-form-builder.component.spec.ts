import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NglFormBuilderComponent } from './ngl-form-builder.component';

describe('NglFormBuilderComponent', () => {
  let component: NglFormBuilderComponent;
  let fixture: ComponentFixture<NglFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NglFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NglFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
