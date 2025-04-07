import chai from 'chai';
import app from '../app.js';

// Dynamically import chai-http and use it
const chaiHttp = (await import('chai-http')).default;
chai.use(chaiHttp);

const expect = chai.expect;

describe('Users API', () => {
  it('should return hello world', async () => {
    const res = await chai.request(app).get('/');
    expect(res).to.have.status(200);
    expect(res).to.be.html;
    expect(res.text).to.include('Hello, from nodejs-demo-app');
  });
});



