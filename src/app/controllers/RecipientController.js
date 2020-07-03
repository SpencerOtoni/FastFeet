import Recipient from '../models/recipient';

class RecipientController {
  async store(req, res) {
    const { name } = req.body;
    const existRecipient = await Recipient.findOne({ where: { name } });

    if (existRecipient) {
      return res.status(400).json({ error: 'Recipient not found.' });
    }

    const recipient = await Recipient.create(req.body);

    return res.json(recipient);
  }

  async update(req, res) {}
}

export default new RecipientController();
