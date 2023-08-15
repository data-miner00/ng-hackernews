import { ElementRef, Renderer2 } from '@angular/core';
import { DebugDirective } from './debug.directive';
import { TestBed } from '@angular/core/testing';

export class MockElementRef extends ElementRef {}

describe('DebugDirective', () => {
  let renderer: jasmine.SpyObj<Renderer2> = jasmine.createSpyObj('renderer', [
    'addClass',
    'removeClass',
    'setStyle',
  ]);

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ElementRef, useClass: MockElementRef },
        { provide: Renderer2, useValue: renderer },
      ],
    });
  });

  it('should create an instance', () => {
    const directive = new DebugDirective(
      TestBed.inject(ElementRef),
      TestBed.inject(Renderer2)
    );
    expect(directive).toBeTruthy();
  });
});
