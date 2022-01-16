import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  Form,
  Button,
  Label,
  Input,
  UserIcon,
  PhoneIcon,
} from './phonebookForm.styled';

export default function PhonebookForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const addContact = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(5),
      name,
      number,
    };

    onSubmit(contact);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={addContact}>
      <Label>
        Name
        <Input
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <UserIcon />
      </Label>
      <Label>
        Phone Number
        <Input
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <PhoneIcon />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
}

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
