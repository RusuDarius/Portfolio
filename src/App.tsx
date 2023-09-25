import Badges from "./components/Badges";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="w-screen h-screen bg-cover bg-no-repeat bg-center bg-[url('./utils/images/montainbg.png')]">
      <Heading />
      <Badges />
    </div>
  );
}

export default App;
