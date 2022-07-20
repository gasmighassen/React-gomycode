import "./App.css";
import ProfilePhoto from "./components/profile/ProfilePhoto.js";
import FullName from "./components/profile/FullName.js";
import Adress from "./components/profile/Adress";

function App() {
  return (
    <>
      <div className="main">
        <ProfilePhoto />
        <FullName />
        <Adress />
      </div>
    </>
  );
}

export default App;
