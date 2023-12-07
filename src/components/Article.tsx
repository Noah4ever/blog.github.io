import { Article } from "@/types/Article";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import "@/styles/article.scss";

export default function Article({ articles }: { articles: Article[] }) {
  const { title } = useParams();

  const article = articles.find(
    (article) => article.id === title?.toLowerCase()
  );

  return (
    <article className="article-container">
      <div className="article-content">
        <Markdown>{article ? article.content : "No content"}</Markdown>
        <section className="article-tags">
          {article?.tags?.map((tag, index) => (
            <span key={index} className="article-tag">
              {tag}
            </span>
          ))}
        </section>
      </div>
    </article>
  );
}
