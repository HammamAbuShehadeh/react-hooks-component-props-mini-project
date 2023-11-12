import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  console.log(posts);
  const Articles = posts.map((post) => {
    return (
      <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
        time={post.minutes}
      />
    );
  });
  return (
    <main>
      {Articles}
    </main>
  );
}
export default ArticleList;
