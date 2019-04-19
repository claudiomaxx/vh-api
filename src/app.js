import express from 'express';
import routes from './routes';
import swagger from 'swagger-ui-express';
import swaggerDoc from '../swagger.json';

let app = express();
let port = process.env.PORT || 4000;

// api documentation
app.use('/api-docs', swagger.serve, swagger.setup(swaggerDoc));

// config routes
app.use('/api', routes);

app.get('/', ({ res }) => {
    res.send('WHT!');
});

export default app.listen(port);
