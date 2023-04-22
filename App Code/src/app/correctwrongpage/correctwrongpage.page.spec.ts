import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CorrectwrongpagePage } from './correctwrongpage.page';

describe('CorrectwrongpagePage', () => {
  let component: CorrectwrongpagePage;
  let fixture: ComponentFixture<CorrectwrongpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CorrectwrongpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
