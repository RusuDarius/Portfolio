import Heading from "./components/Heading";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="w-screen h-screen bg-cover bg-no-repeat bg-center bg-[url('./utils/images/montainbg.png')]">
      <Heading />
      <SideBar />
    </div>
  );
}

export default App;
