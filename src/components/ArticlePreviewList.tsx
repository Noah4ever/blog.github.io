import { Article } from "@/types/Article";
import ArticlePreview from "./ArticlePreview";
import "@/styles/article-preview-list.scss";

export default function ArticlePreviewList({
  articles,
}: {
  articles: Article[];
}) {
  return (
    <div className="article-preview-list-container">
      <h2>All Articles</h2>
      <ul className="article-preview-list">
        {articles.length > 0 ? (
          articles.map((article) => (
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
