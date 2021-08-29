import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import Link from 'gatsby-link';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

interface Post {
  node: {
    id: string;
    slug: string;
    title: string;
    createdAt: string;
    shortDescription: string;
    tags: [
      {
        name: string;
        slug: string;
      }
    ];
    image: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

const Posts: React.FC = () => {
  const { allContentfulPost } = useStaticQuery(graphql`
    query {
      allContentfulPost(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            id
            title
            slug
            createdAt(formatString: "DD MMM YYYY")
            shortDescription
            image {
              gatsbyImageData(layout: FULL_WIDTH)
            }
            tags {
              name
              slug
            }
          }
        }
      }
    }
  `);

  const posts: Post[] = allContentfulPost.edges;

  return (
    <Container section>
      <TitleSection title="Blog" subtitle="All my posts" center />
      <Styled.Posts>
        {posts.map((item) => {
          const { id, slug, title, image, createdAt, shortDescription, tags } = item.node;

          return (
            <Styled.Post key={id}>
              <Link to={slug}>
                <Styled.Card>
                  <Styled.Image>
                    <GatsbyImage image={image.gatsbyImageData} alt={title} />
                  </Styled.Image>
                  <Styled.Content>
                    <Styled.Date>{createdAt}</Styled.Date>
                    <Styled.Title>{title}</Styled.Title>
                    <Styled.Description>{shortDescription}</Styled.Description>
                  </Styled.Content>
                  {tags && (
                    <Styled.Tags>
                      {tags.map((item) => (
                        <Styled.Tag key={item.slug}>{item.name}</Styled.Tag>
                      ))}
                    </Styled.Tags>
                  )}
                </Styled.Card>
              </Link>
            </Styled.Post>
          );
        })}
      </Styled.Posts>
    </Container>
  );
};

export default Posts;
