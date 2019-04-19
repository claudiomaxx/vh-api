import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import chaiPromise from 'chai-as-promised';

chai.use(chaiHttp);
chai.use(chaiPromise);

import { getJobs } from './routes/jobs-route';
import app from './app';
import { doesNotReject } from 'assert';

// let req = {
//     body: {},
// };

// let res = {
//     sendCalledWith: '',
//     send: function(arg) {
//         this.sendCalledWith = arg;
//     },
// };

describe('Config routes:', () => {
    it('GET /jobs', done => {
        try {
            const response = chai.request(app).get('/jobs');

            if (response.body && response.body.length > 0) {
                const first = response.body[0];
                console.log(Object.keys(first));

                expect(Object.keys(first)).to.include.members([
                    'id',
                    'title',
                    'summary',
                    'description',
                    'requirements',
                    'plus',
                    'company',
                    'location',
                    'active',
                    'createdAt',
                    'expireAt',
                ]);
            } else {
                expect(response).to.have.status(404);
            }

            done();
        } catch (err) {
            done(err);
        }
    });

    it('GET /jobs/:id', () => {
        expect(true).to.be.true;
    });

    it('POST /jobs/apply/:id', () => {
        expect(true).to.be.true;
    });

    it('DELETE /jobs/apply/:id', () => {
        expect(true).to.be.true;
    });
});
