import Heading from "./components/Heading";
import Projects from "./components/Projects";
import SideBar from "./components/SideBar";
// import Info from "./components/Info";

function App() {
  return (
    <div className="w-screen min-h-screen bg-cover bg-no-repeat bg-center bg-[url('./utils/images/mountain2-min.png')] bg-fixed overflow-auto">
      <div className="ml-[450px]">
        <Heading />
        <hr className="w-[25%] mt-20 border-2 rounded-full shadow-lg" />
        <Projects />
        {/* <hr className="w-[25%] mt-20 border-2 rounded-full shadow-lg" />
        <Info /> */}
      </div>
      <SideBar />
    </div>
  );
}

export default App;
