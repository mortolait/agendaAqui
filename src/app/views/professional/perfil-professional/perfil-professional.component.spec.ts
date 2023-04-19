import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilProfessionalComponent } from './perfil-professional.component';

describe('PerfilProfessionalComponent', () => {
  let component: PerfilProfessionalComponent;
  let fixture: ComponentFixture<PerfilProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilProfessionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
