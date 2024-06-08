import fm from "front-matter";

const parseExpoDocs = async (slug) => {
  const url = `https://raw.githubusercontent.com/expo/main/docs/pages/${slug}.mdx`;
  const response = await fetch(url);
  const content = await response.text();

  const data = fm(content);
  console.log(content);
};

parseExpoDocs("get-started/start-developing");
