import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import MainLayout from "@/pages/MainLayout.tsx";
import Article from "@/components/Article.tsx";
import ArticlePreviewList from "@/components/ArticlePreviewList";
import getAllArticles from "@/articles/AllArticles";
import { Article as ArticleType } from "@/types/Article";

export default function App() {
  const [articles, setArticles] = React.useState<ArticleType[]>();

  React.useEffect(() => {
    for (const article of getAllArticles()) {
      setArticles((_articles) => [...(_articles ?? []), article]);
    }
  }, []);

  const router = createHashRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <ArticlePreviewList articles={articles ?? []} />,
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
