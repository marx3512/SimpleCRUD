const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Luiz',
        email: 'luiz1@gmai.com',
        password_hash: await bcryptjs.hash('35121054', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Luiz 2',
        email: 'luiz2@gmai.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Luiz 3',
        email: 'luiz3@gmai.com',
        password_hash: await bcryptjs.hash('654321', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
  ),

  down: () => {},
};
