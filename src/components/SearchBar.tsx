import React, { useEffect, useState } from "react";
import MiniSearch, { SearchResult } from "minisearch";
import { Article } from "@/types/Article";
import "@/styles/searchbar.scss";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export default function SearchBar({
  articles,
  setShowArticles,
}: {
  articles: Article[];
  setShowArticles: any;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchInput, setSearchInput] = useState("");

  const miniSearchRef = React.useRef<MiniSearch<Article>>();

  useEffect(() => {
    searchQuery();
  }, []);

  // make useEffect on location and remove searchQuery when location is on /
  useEffect(() => {
    if (location.pathname === "/") {
      setSearchInput("");
    }
  }, [location]);

  useEffect(() => {
    miniSearchRef.current = new MiniSearch({
      fields: ["title", "content"], // Specify the fields to search in
      storeFields: ["title", "id", "createdAt"], // Specify the fields to store in the search index
    });
    miniSearchRef.current.addAll(articles);
    searchQuery();
  }, [articles]);

  function searchQuery() {
    const query = searchParams.get("query");
    if (query) {
      setSearchInput(query);
      handleSearch({ target: { value: query } } as any);
    }
  }

  function handleEmptySearch() {
    articles.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
    setShowArticles(articles);
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchInput(value);

    navigate(`/search`);
    setSearchParams({ query: value });

    handleEmptySearch();

    const results = miniSearchRef.current?.search(value, {
      boost: { title: 5 },
      prefix: true,
      fuzzy: 0.3,
    });
    console.log(location.pathname);
    results?.sort((a: SearchResult, b: SearchResult) => b.score - a.score);

    const newResults = results
      ?.map((result: SearchResult) => result.id)
      .filter(
        (id: string, index: number, self: any) => self.indexOf(id) === index
      )
      .map((id: string) => articles.find((article) => article.id === id))
      .filter(Boolean);

    setShowArticles(newResults);
  };

  function handleExitSearch() {
    setSearchInput("");
    navigate(`/`);
    setSearchParams({});
    handleEmptySearch();
  }

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={searchInput}
        onChange={handleSearch}
        placeholder="Search..."
        className="search-bar-input"
      />
      {location.pathname.includes("search") && (
        <button className="search-bar-button" onClick={handleExitSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="12"
            viewBox="0 0 384 512"
          >
            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
          </svg>
        </button>
      )}
    </div>
  );
}
