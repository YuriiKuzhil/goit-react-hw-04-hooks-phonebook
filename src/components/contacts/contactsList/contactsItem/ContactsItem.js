import PropTypes from 'prop-types';
import {
  ListItem,
  ItemText,
  ItemButton,
  TrashIcon,
  UserIcon,
} from './ContactsItem.styled';

const ContactsItem = ({ name, number, onClick }) => {
  return (
    <ListItem>
      <UserIcon />
      <ItemText>{name}:</ItemText>
      <ItemText>{number}</ItemText>
      <ItemButton type="button" onClick={onClick}>
        Delete
        <TrashIcon />
      </ItemButton>
    </ListItem>
  );
};
ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ContactsItem;
