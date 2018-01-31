import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumImageComponent } from './album-image.component';

describe('AlbumImageComponent', () => {
  let component: AlbumImageComponent;
  let fixture: ComponentFixture<AlbumImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
