import { useDispatch } from 'react-redux';
import { FilterStyle } from './Filter.styled';
import { addContactsFilter } from '../../redux/contacts/contacts.reducer';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleInputFilterChange = evt => {
    const filterValue = evt.target.value;
    console.log('filterValue: ', filterValue);
    dispatch(addContactsFilter(filterValue));
  };
  return (
    <div>
      <h2>Find contacts by name</h2>
      <FilterStyle type="text" onChange={handleInputFilterChange} />
    </div>
  );
};
