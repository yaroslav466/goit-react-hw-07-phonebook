import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { addContact } from '../../redux/contacts/contacts.reducer';
import { FormStyle } from './Form.styled';
import { selectContacts } from '../../redux/contacts/contacts.selectors';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  console.log('contactsInForm: ', contacts);

  const createContact = formData => {
    if (contacts.some(contact => contact.name === formData.name)) {
      alert(`${formData.name} is already in contacts`);
      return;
    }
    const newContact = {
      ...formData,
      id: nanoid(),
    };
    console.log(newContact);
    dispatch(addContact(newContact));
  };

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    const formData = {
      name: name,
      phone: phone,
    };
    createContact(formData);
    setName('');
    setPhone('');
  };

  const handleInputChange = evt => {
    const value = evt.target.value;
    const name = evt.target.name;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setPhone(value);
    }
  };

  return (
    <div>
      <FormStyle onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          <p>Phone</p>
          <input
            type="tel"
            name="number"
            value={phone}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </FormStyle>
    </div>
  );
};