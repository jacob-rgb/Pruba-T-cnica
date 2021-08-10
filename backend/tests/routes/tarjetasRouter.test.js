const { test, expect } = require('@jest/globals');
const request = require('supertest');
let { server } = require('../../app') ;


describe("test on  tarjetasRouter (all EndPoints)", () => {
       
    test("endpoint /api/graphic-cards should return body.ok === true & body.tarjetas must exist", async () => {
          await request(server).get('/api/graphics-cards').then((response) => {
             expect(response.body.ok).toBe(true);
             expect(response.body.tarjetas).toBeTruthy();
         });
    });

    test("endpoint /api/graphic-cards/:id should return body.ok === true & body.tarjetas must exist", async () => {
        await request(server).get('/api/graphics-cards/610d5d173c30c7b012bf3cda').then((response) => {
            expect(response.body.ok).toBe(true);
            expect(response.body.tarjeta).toBeTruthy();
        });
    });

    test("endpoint /api/graphic-cards/:somefalseid should return errors", async () => {
        await request(server).get('/api/graphics-cards/wdwd').then((response) => {
            expect(response.body.errors).toBeTruthy();
        });
    });

    test("endpoint /api/graphic-cards/termino/busqueda/a should return body.ok === true & body.tarjetas must exist", async () => {
        await request(server).get('/api/graphics-cards/termino/busqueda/a').then((response) => {
            expect(response.body.ok).toBe(true);
            expect(response.body.tarjetas).toBeTruthy();

        });
    });

    test("endpoint /api/graphic-cards/termino/busqueda/a should return body.ok === true & body.tarjetas must exist", async () => {
        await request(server).get('/api/graphics-cards/termino/busqueda/a').then((response) => {
            expect(response.body.ok).toBe(true);
            expect(response.body.tarjetas).toBeTruthy();

        });
    });

    test("endpoint /api/graphic-cards/termino/busqueda/someFalseTerm should return body.ok === true & body.tarjetas.length must be 0", async () => {
        await request(server).get('/api/graphics-cards/termino/busqueda/wfdwedfwe').then((response) => {
            expect(response.body.ok).toBe(true);
            expect(response.body.tarjetas.length).toEqual(0);

        });
    });
})
