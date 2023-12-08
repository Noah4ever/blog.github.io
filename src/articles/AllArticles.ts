import { Article as ArticleType } from "@/types/Article";

import { article as a } from "@/articles/CreateSubdomainForGitHubPages";
import { article as b } from "@/articles/BuildingYourOwnFreeWebsiteWithGitHubPages";

export default function getAllArticles(): ArticleType[] {
  return [a, b];
}
