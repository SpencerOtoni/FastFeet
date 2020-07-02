import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.INTEGER,
        street: Sequelize.INTEGER,
        number: Sequelize.INTEGER,
        complement: Sequelize.INTEGER,
        state: Sequelize.INTEGER,
        city: Sequelize.INTEGER,
        cep: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

export default Recipient;
