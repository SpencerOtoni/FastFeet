import User from '../models/user';

class UserController {
  async store(req, res) {
    const { email } = req.body;
    const userExist = await User.findOne({ where: { email } });

    if (userExist) {
      return res.status(400).json({ error: 'User alredy exist.' });
    }

    const { id, name } = await User.create(req.body);

    return res.json({
      id,
      name,
    });
  }

  async update(req, res) {
    console.log(req.userId);

    return res.json(true);
  }
}

export default new UserController();
