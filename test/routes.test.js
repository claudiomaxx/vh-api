import request from 'supertest';

import { getJobs } from '../src/controllers/jobs-controller';
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
    it('GET /api/jobs', done => {
        request(app)
            .get('/api/jobs')
            .expect(200, done);
    });

    // test get jobs by id
    it('GET /api/jobs/:id', done => {
        request(app)
            .get('/api/jobs/1')
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
