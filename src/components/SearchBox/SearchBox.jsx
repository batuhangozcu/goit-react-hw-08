import styles from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setNameFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        placeholder="Enter name"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
