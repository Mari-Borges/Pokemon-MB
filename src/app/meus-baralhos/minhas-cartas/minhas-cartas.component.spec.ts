import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasCartasComponent } from './minhas-cartas.component';

describe('MinhasCartasComponent', () => {
  let component: MinhasCartasComponent;
  let fixture: ComponentFixture<MinhasCartasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinhasCartasComponent]
    });
    fixture = TestBed.createComponent(MinhasCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
