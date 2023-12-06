import { Article } from "@/types/Article";
import { useNavigate } from "react-router-dom";
import "@/styles/article-preview.scss";

export default function ArticlePreview({ article }: { article: Article }) {
  const navigate = useNavigate();

  function handleArticleClick() {
    const title = article.title.replace(/\s/g, "-").toLowerCase();
    navigate(`/article/${title}`);
  }

  return (
    <article className="article-preview-container" onClick={handleArticleClick}>
      <h3 className="article-preview-title">{article.title}</h3>
      <p className="article-preview-description">{article.description}</p>
      <p className="article-preview-tech-stack">
        {article.techStack.map((tag) => (
          <span className="article-preview-tag" key={tag}>
            {tag}
          </span>
        ))}
      </p>
      <p className="article-preview-info">
        {article.author}, {article.createdAt}
      </p>
    </article>
  );
}
