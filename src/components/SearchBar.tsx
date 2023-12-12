import React, { useEffect, useState } from "react";
import MiniSearch from "minisearch";
import { Article } from "@/types/Article";
import "@/styles/searchbar.scss";

export default function SearchBar({
  articles,
  setShowArticles,
}: {
  articles: Article[];
  setShowArticles: any;
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const miniSearchRef = React.useRef<MiniSearch<any>>();

  useEffect(() => {
    // Perform search using MiniSearch
    miniSearchRef.current = new MiniSearch({
      fields: ["title", "content"], // Specify the fields to search in
      storeFields: ["title", "id", "createdAt"], // Specify the fields to store in the search index
    });
    miniSearchRef.current.addAll(articles);
  }, [articles]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);

    if (value === "") {
      articles.sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
      setShowArticles(articles);
      return;
    }

    // Perform the search
    const results = miniSearchRef.current?.search(value, {
      boost: { title: 5 },
      prefix: true,
      fuzzy: 0.3,
    });

    // filter out the results that are not in the current category by score and match with article title
    results?.sort((a: any, b: any) => b.score - a.score);

    // Use map to simplify the transformation and filtering
    console.log(results);
    const newResults = results
      ?.map((result: any) => result.id)
      .filter((id: any, index: number, self: any) => self.indexOf(id) === index)
      .map((id: any) => articles.find((article) => article.id === id))
      .filter(Boolean);

    setShowArticles(newResults);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
      />
    </div>
  );
}
