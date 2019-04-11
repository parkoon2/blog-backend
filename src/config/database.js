/** DB 세팅 */
import { Pool } from 'pg';
import constants from 'Config/constants';
const pool = new Pool(constants.PG);

export default {
  query(text, params) {
    return new Promise((resolve, reject) => {
      pool.connect().then(client => {
        client
          .query(text, params)
          .then(res => {
            client.release();
            resolve(res);
          })
          .catch(err => {
            client.release();
            reject(err);
          });
      });
    });
  },
};
