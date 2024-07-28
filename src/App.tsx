import "./App.css";
import { Header } from "./components/header/Header";
import KanbanBoard from "./components/KanbanBoard";

function App() {
  return (
    <div className="app">
      <Header />
      <KanbanBoard />
    </div>
  );
}

export default App;
