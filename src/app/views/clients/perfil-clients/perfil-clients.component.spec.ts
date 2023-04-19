import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilClientsComponent } from './perfil-clients.component';

describe('PerfilClientsComponent', () => {
  let component: PerfilClientsComponent;
  let fixture: ComponentFixture<PerfilClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
