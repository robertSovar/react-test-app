import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import PropsTest from "./components/PropsTest/PropsTest.jsx";
import { favoriteBooks } from "../db-books.js";
import ClassComponentTest from "./components/ClassComponentTest/ClassComponentTest.jsx";
import Events from "./components/Events/Events.jsx";
import SearchFruit from "./components/SearchFruit/SearchFruit.jsx";
import DarkModeBtn from "./utils/DarkModeBtn/DarkModeBtn.jsx";
function App() {
  return (
    <>
      <DarkModeBtn />
      <Header
        title={"Prop title"}
        paragraph={"I used prop to put a paragraph"}
      />

      <PropsTest books={favoriteBooks} />
      <ClassComponentTest />
      <Events />
      <SearchFruit />
      <Footer creator="Sovar Robert Ionut" />
    </>
  );
}

export default App;
