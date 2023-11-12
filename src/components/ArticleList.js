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
      />
      // <>
      //   <h1 key={post.id}>{post.title}</h1>
      // </>
    );
  });
  return (
    <main>
      {Articles}
      {/* <Article posts={posts} />   when I use map function inside Article component  no need to variable Articles in line 6*/}
    </main>
  );
}
export default ArticleList;
