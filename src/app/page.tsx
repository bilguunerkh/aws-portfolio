import Main from "./components/Main/main";
import NavLayout from "./Layouts/NavLayout";
import Reklam from "./components/Main/Reklam/reklam";
import Last from "./components/Main/lastSearching/last";
import Category from "./components/Main/Category/category";
export default function Home() {
  return (
    <NavLayout>
      <Reklam />
      <Category />
      <Last />
      <Main />
    </NavLayout>
  );
}
