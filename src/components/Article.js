import React from "react";
// function Article({ posts }) {
//   console.log(posts);
//   const Article = posts.map((post) => {
//     return (
//       <article key={post.id}>
//         <h3>{post.title}</h3>
//         {post.date === undefined || post.date === "" ? (
//           <small>January 1, 1970</small>
//         ) : (
//           <small>{post.date}</small>
//         )}
//         <p>{post.preview}</p>
//       </article>
//     );
//   });

//   return <>{Article}</>;
// }
// export default Article;

function Article({ title, date = "January 1, 1970", preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
