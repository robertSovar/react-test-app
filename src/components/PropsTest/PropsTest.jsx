import styles from "./PropsTest.module.css";

const PropsTest = ({ books }) => {
  return (
    <ul className={styles.bookSection}>
      {books.map((book) => (
        <li className={styles.bookList} key={book.id}>
          {book.name}
        </li>
      ))}
    </ul>
  );
};

export default PropsTest;
