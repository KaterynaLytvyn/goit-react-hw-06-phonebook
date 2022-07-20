import s from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/actions';

const ContactList = (props) => {

    const { contacts } = props;
    const dispatch = useDispatch()

    return (
        <ul className={s.list}>
            {contacts.map(contact => 
            <li key={contact.id} className={s.item}>
                {contact.name} : {contact.number} 
                <button 
                    className = "button" 
                    type="button" 
                    onClick={() => dispatch(deleteContact(contact.id))}
                >Delete</button>
            </li>)}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array,
  };

export default ContactList;