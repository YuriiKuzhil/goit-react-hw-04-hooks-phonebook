import React, { Component } from 'react';
// import { FaUser, FaPhoneAlt } from 'react-icons/fa';
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

class PhonebookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  addName = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(5),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onSubmit(contact);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.addContact}>
        <Label>
          Name
          <Input
            onChange={this.addName}
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
            onChange={this.addName}
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
}

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default PhonebookForm;
