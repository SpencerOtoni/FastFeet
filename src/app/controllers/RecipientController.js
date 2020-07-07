import * as Yup from 'yup';
import Recipient from '../models/recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string(),
      state: Yup.string().required().max(2),
      city: Yup.string().required(),
      cep: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { name } = req.body;
    const existRecipient = await Recipient.findOne({ where: { name } });

    if (existRecipient) {
      return res.status(400).json({ error: 'Recipient alredy exist.' });
    }

    const {
      id,
      street,
      number,
      complement,
      state,
      city,
      cep,
    } = await Recipient.create(req.body);

    return res.json({
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      cep,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.string(),
      complement: Yup.string(),
      state: Yup.string().max(2),
      city: Yup.string(),
      cep: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { name } = req.body;

    const recipient = await Recipient.findOne({ where: { name } });

    if (!recipient) {
      return res.status(401).json({ error: 'Recipient not found.' });
    }

    const { id } = await recipient.update(req.body);

    return res.json({
      id,
      name,
    });
  }
}

export default new RecipientController();
