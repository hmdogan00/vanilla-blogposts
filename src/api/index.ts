import { Blog } from "../types";
const API_URL = "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

export const getCategoryName = (id: number) => {
  switch (id) {
    case 2038:
      return "Canonical";
    case 2226:
      return "Design";
    case 2052:
      return "UX";
    default:
      return "General";
  }
};

export const getBlogs = async () => {
  const response = await fetch(API_URL);
  const data = (await response.json()) as Blog[];
  data.forEach((blog) => {
    const categories = blog.categories.map((catID) => getCategoryName(catID));
    blog.parsedCategories = categories;
  });
  return data;
};
