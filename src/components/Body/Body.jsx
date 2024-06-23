import styles from "./Body.module.css";

const Body = ({ books }) => {
  return (
    <ul>
      {books.map((book) => (
        <li className={styles.bookList} key={book.id}>
          {book.name}
        </li>
      ))}
    </ul>
  );
};

export default Body;
