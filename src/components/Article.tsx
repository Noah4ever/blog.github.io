import React, { useEffect, useState } from "react";
import { Article } from "@/types/Article";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import "@/styles/article.scss";

export default function Article({ articles }: { articles: Article[] }) {
  const { title } = useParams();
  const [article, setArticle] = useState<Article>();

  useEffect(() => {
    const article = articles.find(
      (article) => article.id === title?.toLowerCase()
    );
    setArticle(article);
  }, [articles, title]);

  return (
    <article className="article-container">
      <div className="article-content">
        <h1 className="article-title">{article?.title}</h1>
        <section className="article-info">
          <img
            src={`./authors/${article?.author.pictureUrl ?? "default.jpg"}`}
            alt={article?.author.name}
            className="article-info-picture"
          />
          <div className="article-info-right">
            <span className="article-info-name">
              Written by {article?.author.name}
            </span>
            <span className="article-info-delimter">·</span>
            <span className="article-info-date">{article?.createdAt}</span>
          </div>
        </section>
        <Markdown>{article ? article.content : "No content"}</Markdown>
        <section className="article-tags">
          {article?.tags?.map((tag, index) => (
            <span key={index} className="article-tag">
              {tag}
            </span>
          ))}
        </section>
      </div>

      <section className="article-below-container">
        <div className="article-author-profile">
          <img
            src={`./authors/${article?.author.pictureUrl ?? "default.jpg"}`}
            alt={article?.author.name}
            className="article-author-profile-picture"
          />
          <div className="article-author-profile-right">
            <p className="article-author-profile-name">
              {article?.author.name}
              {article?.author.age ? `, ${article?.author.age}` : ""}
            </p>
            <p className="article-author-profile-description">
              {article?.author.description}
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
