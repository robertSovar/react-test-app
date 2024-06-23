import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Body from "./components/Body/Body.jsx";
import { favoriteBooks } from "../db-books.js";

function App() {
  return (
    <>
      <Header
        title={"Prop title"}
        paragraph={"I used prop to put a paragraph"}
      />
      <Body books={favoriteBooks} />
      <Footer />
    </>
  );
}

export default App;
