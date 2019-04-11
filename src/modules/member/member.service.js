import db from 'Config/database';

export function findAllMembersId() {
  return new Promise((resolve, reject) => {
    db.query('select id from wgcp.member')
      .then(result => {
        resolve(result['rows']);
      })
      .catch(err => {
        reject(err);
      });
  });
}
