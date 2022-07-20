import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { filterContacts } from '../../redux/actions';

const Filter = (props) => {

    const { filter } = props;
    const dispatch = useDispatch()

    return (
        <label>
            Find contacts by name
            <input type="text" value={filter} onChange={event => dispatch(filterContacts(event.currentTarget.value))} />
        </label>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
  };

export default Filter;