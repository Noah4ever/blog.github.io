import { Author } from "./Author";

export type Article = {
  id: string;
  title: string;
  author: Author;
  content: string;
  tags: string[];
  description: string;
  createdAt: string;
  updatedAt: string;
};
