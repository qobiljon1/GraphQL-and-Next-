import { request, gql } from "graphql-request";

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(
    "https://api-eu-central-1.graphcms.com/v2/ckz3uhb2g0qnd01xo41q95b0t/master",
    query
  );
  return result.postsConnection.edges;
};
