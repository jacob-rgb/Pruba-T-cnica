import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { TarjetasApiService } from '../../../services/tarjetas-api.service';

import { GraphicsCardListContainerComponent } from './graphics-card-list-container.component';

describe('GraphicsCardListContainerComponent', () => {
  let component: GraphicsCardListContainerComponent;
  let fixture: ComponentFixture<GraphicsCardListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicsCardListContainerComponent ],
      imports: [ HttpClientTestingModule, NgxPaginationModule],
      providers: [TarjetasApiService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsCardListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
