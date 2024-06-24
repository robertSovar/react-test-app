import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import PropsTest from "./components/PropsTest/PropsTest.jsx";
import { favoriteBooks } from "../db-books.js";
import ClassComponentTest from "./components/ClassComponentTest/ClassComponentTest.jsx";
import Events from "./components/Events/Events.jsx";

function App() {
  return (
    <>
      <Header
        title={"Prop title"}
        paragraph={"I used prop to put a paragraph"}
      />
      <PropsTest books={favoriteBooks} />
      <ClassComponentTest />
      <Events />
      <Footer creator="Sovar Robert Ionut" />
    </>
  );
}

export default App;
