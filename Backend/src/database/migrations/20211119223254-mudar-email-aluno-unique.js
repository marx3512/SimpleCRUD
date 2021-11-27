module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([queryInterface.changeColumn(
    'alunos',
    'email',
    {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  ),
  ]),

  down: () => {},
};
