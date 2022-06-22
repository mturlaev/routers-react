import css from "./App.module.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home/Home.jsx";
import { Features } from "./components/Features/Features.jsx";
import { Contact } from "./components/Contact/Contact.jsx";

function App() {
  return (
    <>
      <header className={css.header}>
        <div className={css.cover}>Cover</div>
        <div className={css.lishki}>
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </header>
      <body className={css.body}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </body>
      <footer className={css.footer}>
        <p>
          Cover template for{" "}
          <a className={css.foot} href="https://getbootstrap.com/">
            Bootstrap
          </a>
          , by{" "}
          <a className={css.foot} href="https://twitter.com/mdo">
            @mdo
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;
