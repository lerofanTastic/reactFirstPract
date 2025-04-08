import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
// import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./components/About/About";
import { AnimeCard } from "./components/AnimeCard/AnimeCard";
import { topAnime } from "./constants/topAnime";
import { AnimeList } from "./components/AnimeList/AnimeList";
import { CustomComponent } from "./components/CustomComponent/CustomComponent";
import { Reviews } from "./components/Reviews/Reviews";
import {
  TranslationContext,
  translations,
} from "./context/translation/translationContext";
import { useContext, useState } from "react";
import { ThemeContext } from "./context/theme/themeContext";
import { Login } from "./components/Login/Login";
import { GoTop } from "./components/GoTop/GoTop";
import { ApiCard } from "./components/ApiCard/ApiCard";

function App() {
  const [lang, setLang] = useState("ru");
  const { theme } = useContext(ThemeContext);

  function changeLang() {
    setLang((prevLang) => (prevLang === "en" ? "ru" : "en"));
  }

  const isLoggedIn = true;
  return (
    <TranslationContext.Provider value={translations[lang]}>
      <div className={`wrapper ${theme}`}>
        <Header changeLang={changeLang} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/anime-list/:id"
            element={<AnimeCard animeList={topAnime} />}
          />
          <Route path="/about-us" element={<About />}>
            <Route path="contacts" element={<div>contacts</div>} />
            <Route path="about" element={<div>about</div>} />
          </Route>
          <Route
            path="/anime-list"
            element={
              isLoggedIn ? (
                <AnimeList animeList={topAnime} />
              ) : (
                <Navigate to="/custom" />
              )
            }
          />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/custom" element={<ApiCard />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<div>404 error, not exist</div>} />
        </Routes>
        <Footer />
        <GoTop />
      </div>
    </TranslationContext.Provider>
  );
}

export default App;
