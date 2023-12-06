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
      <Markdown>{article ? article.content : "No content"}</Markdown>
    </article>
  );
}
