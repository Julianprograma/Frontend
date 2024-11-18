import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsClientComponent } from './comments.component';

describe('CommentsComponent', () => {
  let component: CommentsClientComponent;
  let fixture: ComponentFixture<CommentsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentsClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
