import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredListComponent } from './cred-list.component';

describe('CredListComponent', () => {
  let component: CredListComponent;
  let fixture: ComponentFixture<CredListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
