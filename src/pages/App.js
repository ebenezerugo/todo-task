import './App.css';
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Core from "../layouts/core";

function App() {
  return (
    <main className="main">
        <div>
            <Sidebar/>
        </div>
        <div>
            <Header/>
            <div className="application">
                <Core/>
            </div>
        </div>
    </main>
  );
}

export default App;
