import express from 'express';
import { jobs } from './routes';

let app = express();

// config routes
app.use('/jobs', jobs);

app.get('/', ({ res }) => {
    res.send('WHT!');
});

app.listen(4000, _ => console.log('vh-api ON!'));

export default app;
