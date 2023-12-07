import { Article } from "@/types/Article";

const article: Article = {
  id: "",
  title: "How to create a subdomain for GitHub pages",
  author: "Noah Thiering",
  content: "",
  techStack: ["GitHub Pages", "Subdomain", "DNS", "CNAME"],
  description:
    "Do you want to create a subdomain for your GitHub pages website? This article will show you how to do it.",
  createdAt: "07.12.2023",
  updatedAt: "07.12.2023",
};

const content = `

# ${article.title}

Written by: [${article.author}](https://thiering.org/)
Created at: ${article.createdAt}
Updated at: ${article.updatedAt}

## Creating a Subdomain for GitHub Pages: A Step-by-Step Guide

If you're looking to establish a subdomain for your GitHub Pages, you're in the right place. This guide will walk you through the process, step by step, making it easy for you to showcase your content on a custom subdomain like 'blog.example.com'. We'll be using GitHub and your DNS provider to set up a CNAME record, linking your subdomain to your GitHub Pages repository.

## Step 1: Create a New Repository on GitHub

Start by creating a new repository on GitHub. Choose a meaningful name for your repository; for example, if you want your subdomain to be 'blog.example.com', you could name your repository 'blog.github.io'.

![Create Repository](https://via.placeholder.com/800x400)

## Step 2: Set Up GitHub Pages

Inside your newly created repository, navigate to the "Settings" tab and scroll down to the "GitHub Pages" section. Choose the branch you want to use for GitHub Pages; typically, the "main" or "master" branch is used.

![GitHub Pages Settings](https://via.placeholder.com/800x400)

Once you've selected the branch, GitHub will provide you with the URL of your GitHub Pages site. In this case, it will be something like 'https://<username>.github.io'.

## Step 3: Configure Your DNS Provider

Now, head over to your DNS provider's website. This could be services like GoDaddy, Namecheap, or any other provider you're using. Look for the DNS management or DNS settings section.

Add a new CNAME record with the following details:

- **Host:** Enter the subdomain you want, like 'blog'.
- **Value/Points to/Target:** Set this to your GitHub Pages URL, in our example, 'username.github.io/blog'.

![DNS Provider CNAME Configuration](https://via.placeholder.com/800x400)

## Step 4: Wait for DNS Propagation

DNS changes might take some time to propagate across the internet. This process can take anywhere from a few minutes to a couple of hours. Be patient and periodically check your subdomain to see if it's live.

## Step 5: Verify Your Subdomain

Once DNS propagation is complete, visit your custom subdomain, e.g., 'blog.example.com'. You should see your GitHub Pages site live on your new subdomain.

Congratulations! You've successfully created a subdomain for your GitHub Pages. Feel free to customize your site further by updating your repository with your content and styling.

Now, every time you push changes to your repository, your subdomain will reflect the latest content. Enjoy showcasing your work on your personalized subdomain!


`;

article.content = content;
article.id = article.title.replace(/ /g, "-").toLowerCase();

export { article };
