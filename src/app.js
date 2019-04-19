import express from 'express';
import { jobs } from './routes';

let app = express();
let port = process.env.PORT || 4000;

// config routes
app.use('/jobs', jobs);

app.get('/', ({ res }) => {
    res.send('WHT!');
});

export default app.listen(port);
