import React from "react";
import { Reviews } from "../../components/Reviews/Reviews";

export const TranslationContext = React.createContext();

export const translations = {
    en:{
        siteName: "LeroDb",
        menu:{
            main: "MAIN",
            about: "ABOUT",
            animeList: "ANIME LIST",
            reviews: "REVIEWS",
            button: "EN",
        },
    },
    ru:{
        siteName: "LeroDb",
        menu:{
            main: "ГЛАВНАЯ",
            about: "О НАС",
            animeList: "СПИСОК АНИМЕ",
            reviews: "ОТЗЫВЫ",
            button: "RU",
        },
        card:{

        }
    },
}