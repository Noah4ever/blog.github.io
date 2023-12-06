import { Article } from "@/types/Article";

const article: Article = {
  id: "",
  title: "How to create a subdomain for GitHub pages",
  author: "Noah Thiering",
  content: "",
  techStack: ["GitHub Pages", "Subdomain", "DNS", "CNAME"],
  description:
    "Do you want to create a subdomain for your GitHub pages website? This article will show you how to do it.",
  createdAt: "06.12.2023",
  updatedAt: "06.12.2023",
};

const content = `

# ${article.title}

Written by: [${article.author}](https://thiering.org/)
Created at: ${article.createdAt}
Updated at: ${article.updatedAt}

## Create a CNAME file

Create a file named \`CNAME\` in the \`docs\` directory of your repository. The file should contain the domain name you want to use. For example, if you want to use \`blog.example.com\`, simply put \`blog.example.com\` in the file and save it.

asdasd
`;

article.content = content;
article.id = article.title.replace(/ /g, "-").toLowerCase();

export { article };
