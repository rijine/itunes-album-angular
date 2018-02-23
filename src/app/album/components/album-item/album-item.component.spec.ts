import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumItemComponent } from './album-item.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Album } from '../../models';

describe('AlbumItemComponent', () => {
  let component: AlbumItemComponent;
  let fixture: ComponentFixture<AlbumItemComponent>;
  let collectionNameEl: DebugElement;
  let titleEl: DebugElement;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AlbumItemComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumItemComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    //fixture.detectChanges(); //Ref: Dont call detectChanges() here

    collectionNameEl = fixture.debugElement.query(By.css('.collection'));
    titleEl = fixture.debugElement.query(By.css('a'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update dom on input', () => {
    const newData = { collectionName: 'Mickel Jackson' };
    component.album = newData;
    fixture.detectChanges();
    expect(collectionNameEl.nativeElement.innerText).toEqual(
      newData.collectionName
    );
  });

  it('should emit event on clicking album', () => {
    const newData = { collectionName: 'Mickel Jackson' };
    let selectedAlbum: Album;
    component.album = newData;
    fixture.detectChanges();

    component.notify.subscribe(album => {
      selectedAlbum = album;
    });

    titleEl.triggerEventHandler('click', null);
    expect(selectedAlbum.collectionName).toBe(newData.collectionName);
  });
});
