import Header from "./component/Header";
import Main from "./component/Main";
import Specs from "./component/Specs";
import Footer from "./component/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="head">
        Upload Proof | Activate | <input placeholder="Search ..." />
        <i class="fas fa-globe fa-2x"></i> Spanish
      </header>
      <Header />
      <Main />
      <Specs />
      <Footer />
      <footer className="foot">
        &copy;2020 Q Link Wireless | Unsubscribe | Universal Form | Privacy
        Policy | Terms & Conditions
      </footer>
    </div>
  );
}

export default App;
