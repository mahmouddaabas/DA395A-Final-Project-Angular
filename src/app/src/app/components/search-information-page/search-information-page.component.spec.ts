import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInformationPageComponent } from './search-information-page.component';

describe('SearchInformationPageComponent', () => {
  let component: SearchInformationPageComponent;
  let fixture: ComponentFixture<SearchInformationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchInformationPageComponent]
    });
    fixture = TestBed.createComponent(SearchInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
