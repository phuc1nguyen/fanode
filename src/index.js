import app from './app.js';
import config from '../config/config.js';

(async function () {
  const PORT = config.app.PORT;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})();
