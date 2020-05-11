const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const slugify = require('./src/utils/slugify');

const getMdxDataForType = async ({ type, graphql }) => {
  const { data } = await graphql(`
    {
      allMdx(filter: { frontmatter: { type: { eq: "${type}" } } }) {
        nodes {
          id
          frontmatter {
            title
            coverImage
          }
        }
      }
    }
  `);
  console.log(
    `🔥 Found ${data.allMdx.nodes.length} .mdx files with type: ${type}`
  );
  return data.allMdx.nodes;
};

const turnBlogPostsIntoPages = async ({ graphql, actions }) => {
  const blogPostTemplate = path.resolve('./src/templates/blog/Post.js');

  // Loop over the posts
  const posts = await getMdxDataForType({ type: 'blog', graphql });
  posts.forEach((post, i) => {
    let prevPost;
    let nextPost;

    if (posts.length > 1) {
      if (i !== 0) prevPost = posts[i - 1];
      if (i !== post.length - 1) nextPost = posts[i + 1];
    }

    actions.createPage({
      // What is the URL?
      path: `blog/${slugify(post.frontmatter.title)}`,
      // What react component should we use to render this page?
      component: blogPostTemplate,
      // What data should be surfaced to the Component or Query on this page?
      context: {
        coverImage: post.frontmatter.coverImage,
        id: post.id,
        prev: prevPost ? prevPost.frontmatter.slug : null,
        next: nextPost ? nextPost.frontmatter.slug : null,
      },
    });
  });
};



exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  await turnBlogPostsIntoPages({ graphql, actions });
};
