import styles from "./SearchFruit.module.css";
import { fruits } from "../../../db-books.js";
import { useState } from "react";

function SearchFruit() {
  const [fruitData] = useState(fruits);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const fruitDataFiltered = searchTerm
    ? fruitData.filter((element) =>
        element.fruit
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
      )
    : [];
  return (
    <div className={styles.searchInputContainer}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Check if we have your favourite fruit"
        onChange={handleSearch}
      />

      {fruitDataFiltered.map((fruit) => {
        return (
          <p className={styles.paragraphText} key={fruit.id}>
            {fruit.fruit}
          </p>
        );
      })}
    </div>
  );
}
export default SearchFruit;
