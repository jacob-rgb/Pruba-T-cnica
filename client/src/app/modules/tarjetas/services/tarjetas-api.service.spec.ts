import { TestBed, } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { TarjetasApiService } from './tarjetas-api.service';
import { BehaviorSubject } from 'rxjs';


describe('TarjetasApiService', () => {
  let service: TarjetasApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TarjetasApiService]
    });
  });

  it('should be created', () => {
   const service = TestBed.inject(TarjetasApiService);
   expect(service).toBeTruthy();
  });

  it('should have getTarjetas function', () => {
    const service = TestBed.inject(TarjetasApiService);
    expect(service.getTarjetas).toBeTruthy();
   });

   it('should have getTarjetasByWord function', () => {
    const service = TestBed.inject(TarjetasApiService);
    expect(service.getTarjetasByWord).toBeTruthy();
   });

   it('tarjetasArray should have "[]" as initial value', () => {
    const service = TestBed.inject(TarjetasApiService);
    expect(service.tarjetasArray.getValue()).toEqual([]);
   });

   it('tarjetasArray should change on next',  () => {
    const service = TestBed.inject(TarjetasApiService);
    service.tarjetasArray.next([{name: 'jaco'}])
    expect(service.tarjetasArray.getValue()).not.toEqual([])
   });
   

});
