import React from "react";
import * as matter from "gray-matter";
import ReactMarkdown from "react-markdown";

function PostTemplate({ content, data }) {
  // This holds the data between `---` from the .md file
  const frontmatter = data;

  return (
    <>
      <div className="header">
        <img
          src={
            "https://xn4dxyaid5lopieoqn3zr5pmume2bdjj56mlewlajof7dn2x4eva.arweave.net/u3g74AgfVuegjoN3mPXsowmgjSnvmLJZYEuL8bdX4So"
          }
          width={222}
          height={222}
          style={{ borderRadius: "50%" }}
        />
        <h1>{frontmatter.title}</h1>
      </div>
      <ReactMarkdown className="markdown-content">{content}</ReactMarkdown>
    </>
  );
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;

  // Import our .md file using the `slug` from the URL
  const content = await import(`../../content/${slug}.md`);

  // Parse .md data through `matter`
  const data = matter(content.default);

  // Pass data to our component props
  return { ...data };

  return { slug };
};

export default PostTemplate;
