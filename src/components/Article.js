import React from "react";
function Article({ title, date = "January 1, 1970", preview ,time}) {
    const bento = '🍱' ;
    const coffee = '☕️';
    const repeatEmoji = (emoji,minute) => emoji.repeat(Math.ceil(time / minute));
  return (
    <article>
      <h3>{title}</h3>
      <small>{date} . {time >= 30 ? repeatEmoji(bento,10) : repeatEmoji(coffee,5)} {time} min read</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
