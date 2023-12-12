import { Article } from "@/types/Article";
import { Link } from "react-router-dom";
import "@/styles/article-preview.scss";

export default function ArticlePreview({ article }: { article: Article }) {
  return (
    <Link
      to={`/article/${article.title.replace(/\s/g, "-").toLowerCase()}`}
      className="article-preview-container"
    >
      <h3 className="article-preview-title">{article.title}</h3>
      <p className="article-preview-description">{article.description}</p>
      <p className="article-tags">
        {article.tags
          ? article.tags.map((tag) => (
              <span className="article-tag" key={tag}>
                {tag}
              </span>
            ))
          : ""}
      </p>
      <p className="article-preview-info">
        {article.author.name ?? ""}, {article.createdAt ?? ""}
      </p>
    </Link>
  );
}
