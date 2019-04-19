import request from 'supertest';

import { getJobs } from '../src/routes/jobs-route';
import app from '../src/app';

before(() => {
    app.close();
});

describe('Test routes:', () => {
    // test index
    it('GET /', done => {
        request(app)
            .get('/')
            .expect(200, done);
    });

    // test get jobs
    it('GET /jobs', done => {
        request(app)
            .get('/jobs')
            .expect(200, done);
    });

    // test get jobs by id
    it('GET /jobs/:id', done => {
        request(app)
            .get('/jobs/1')
            .expect(res => {
                res.body;
            })
            .expect(200, done);
    });

    // it('POST /jobs/apply/:id', () => {
    //     expect(true).to.be.true;
    // });

    // it('DELETE /jobs/apply/:id', () => {
    //     expect(true).to.be.true;
    // });
});
