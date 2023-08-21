import Main from "./components/Main/main";
import Add from "./components/Main/Add/add";
import Reklam from "./components/Main/Reklam/reklam";
export default function Home() {
  return (
    <div className="mx-auto ">
      <Add />
      <Reklam />
      <Main />
    </div>
  );
}
