import PropTypes from 'prop-types';
import { Label, Input, SearchIcon } from './ContactsFilter.styled';

const ContactsFilter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange} />
      <SearchIcon />
    </Label>
  );
};
ContactsFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default ContactsFilter;
