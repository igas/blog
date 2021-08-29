import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

import * as Styled from './styles';

interface Post {
  content: {
    childMarkdownRemark: {
      html: React.ReactNode;
    };
  };
  createdAt: string;
  slug: string;
  title: string;
}

interface Props {
  data: {
    contentfulPost: Post;
  };
  pageContext: {
    slug: string;
  };
}

const BlogPost: React.FC<Props> = ({ data, pageContext }) => {
  const post = data.contentfulPost;

  return (
    <Layout>
      <SEO title={post.title} />
      <Container section>
        <TitleSection title={post.createdAt} subtitle={post.title} />
        <FormatHtml content={post.content.childMarkdownRemark.html} />
      </Container>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      createdAt
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
