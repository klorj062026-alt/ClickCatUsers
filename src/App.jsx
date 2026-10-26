import "./App.css";
import CatFacts from "./components/CatFacts";
import CookieClicker from "./components/CookieClicker";
import Users from "./components/Users";

export default function App() {
  return (
    <>
      <h1>Oppgave ClickCatUsers</h1>
      <CookieClicker />
      <CatFacts />
      <Users />
    </>
  );
}
