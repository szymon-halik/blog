import type { PostFilter } from "./utils/posts";

export interface SiteConfig {
  title: string;
  slogan: string;
  description?: string;
  site: string,
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    rss?: boolean;
  };
  homepage: PostFilter;
  googleAnalysis?: string;
  search?: boolean;
}

export const siteConfig: SiteConfig = {
  site: "https://szymonhalik.github.io/",
  title: "Szymon's blog",
  slogan: "Software developer and technology enthusiast",
  description: "I am Szymon(aka Simon) based in EU. I usually write about the software and technology related to Salesforce stuff since my career led me there. Hope you can find something useful here.",
  social: {
    github: "https://github.com/szymon-halik", // leave empty if you don't want to show the github
    linkedin: "https://linkedin.com/in/szymon-halik", // leave empty if you don't want to show the linkedin
    email: "", // leave empty if you don't want to show the email
    rss: true, // set this to false if you don't want to provide an rss feed
  },
  homepage: {
    maxPosts: 5,
    tags: [],
    excludeTags: [],
  },
  googleAnalysis: "", // your google analysis id
  search: true, // set this to false if you don't want to provide a search feature
};
