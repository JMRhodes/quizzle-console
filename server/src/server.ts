import api from './api';
import env from './config/env';

api.listen(env.port, () => {
  console.log(`Express server listening on http://localhost:${env.port}`);
});
