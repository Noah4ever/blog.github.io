import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Article } from "@/types/Article";
import { LocalStorageController } from "@/utils/PersistanceController";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

function MainLayout({
  articles,
  setShowArticles,
}: {
  articles: Article[];
  setShowArticles: any;
}) {
  const persistance = new LocalStorageController();
  useEffect(() => {
    const asciiArt = `
 _______ _     _           _             
|__   __| |   (_)         (_)            
   | |  | |__  _  ___ _ __ _ _ __   __ _ 
   | |  | '_ \\| |/ _ \\ '__| | '_ \\ / _\` |
   | |  | | | | |  __/ |  | | | | | (_| |
   |_|  |_| |_|_|\\___|_|  |_|_| |_|\\__, |
                                    __/ |
                                   |___/  
    `;
    console.log(asciiArt);

    const colorScheme = persistance.load("color-scheme");
    if (colorScheme === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, []);
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <Header articles={articles ?? []} setShowArticles={setShowArticles} />
      <main>
        {/* Render the child routes */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
