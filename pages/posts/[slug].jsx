import React from 'react';
import * as matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

function PostTemplate({ content, data }) {
  // This holds the data between `---` from the .md file
  const frontmatter = data;

  return (
    <div className="flex justify-center items-center">
      <h1>{frontmatter.title}</h1>
      <ReactMarkdown className="markdown-content">{content}</ReactMarkdown>
    </div>
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
