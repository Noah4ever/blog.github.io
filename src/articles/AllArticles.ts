import { Article as ArticleType } from "@/types/Article";

import { article as a } from "@/articles/CreateSubdomainForGitHubPages";

export default function getAllArticles(): ArticleType[] {
  return [a];
}
