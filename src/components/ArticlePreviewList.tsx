import { Article } from "@/types/Article";
import ArticlePreview from "./ArticlePreview";
import "@/styles/article-preview-list.scss";
import { useEffect, useState } from "react";

export default function ArticlePreviewList({
  articles,
}: {
  articles: Article[];
}) {
  const [displayedArticles, setDisplayedArticles] = useState<Article[]>([]);

  useEffect(() => {
    const sortedArticles = [...articles].sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
    setDisplayedArticles(sortedArticles);
  }, [articles]);

  return (
    <div className="article-preview-list-container">
      <h2>All Articles</h2>
      <ul className="article-preview-list">
        {displayedArticles ? (
          displayedArticles.map((article) => (
            <li
              key={article.id + article.createdAt}
              className="article-preview-list-item"
            >
              <ArticlePreview article={article} />
            </li>
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </ul>
    </div>
  );
}
