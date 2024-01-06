import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/contacts.selectors';

export const ContactList = () => {
  const filterContacts = useSelector(selectVisibleContacts);

  
  return (
    <ul>
      {filterContacts.map(contact => {
        return <ContactListItem key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};