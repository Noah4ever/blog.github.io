import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import MainLayout from "@/pages/MainLayout.tsx";
import Article from "@/components/Article.tsx";
import ArticlePreviewList from "@/components/ArticlePreviewList";
import getAllArticles from "@/articles/AllArticles";
import { Article as ArticleType } from "@/types/Article";

export default function App() {
  const [articles, setArticles] = React.useState<ArticleType[]>();
  const [showArticles, setShowArticles] = React.useState<ArticleType[]>();

  React.useEffect(() => {
    const articlesList: ArticleType[] = [];

    for (const article of getAllArticles()) {
      articlesList.push(article);
    }

    setArticles(articlesList);
    setShowArticles(articlesList);
  }, []);

  const router = createHashRouter([
    {
      path: "/",
      element: (
        <MainLayout
          articles={articles ?? []}
          setShowArticles={setShowArticles}
        />
      ),
      children: [
        {
          path: "/",
          element: <ArticlePreviewList articles={showArticles ?? []} />,
        },
        {
          path: "/article/:title",
          element: <Article articles={articles ?? []} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
