import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { GetStaticProps } from 'next';

import { Title, Container, Text, Button, Grid, Link } from '@components';
import { getPosts, Post } from '@posts';

interface BlogProps {
  Blogs: Post[];
}

const BlogImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 4px;
  transition: 0.2s ease-in-out 0s;

  :hover {
    transform: scale(1.02);
  }
`;

const BlogContainer = styled(Container)`
  :hover > * img {
    transform: scale(1.03);
  }
`;


const BlogButton = styled(Button)`
  padding: 12px 30px;
`;

const Blogs = ({ Blogs }: BlogProps): JSX.Element => (
  <Container marginBottom="5rem">
    <Head>
      <title>Blogs</title>
    </Head>
    <Container alignItems="center">
      <Title>Blogs</Title>
      <Text textAlign="center">
        Posts about code, projects and various other things.
      </Text>
    </Container>
    <Grid
      py="4rem"
      gridTemplateColumns={['1fr', 'repeat(2, 1fr)']}
      width="100%"
      gridGap="10%"
    >
      {Blogs.map(({ data }) => (
        <BlogContainer
          key={data.slug}
          flexDirection="column"
          alignItems="flex-start"
          width="100%"
          gridGap="1.5rem"
        >
          <Link href={data.url} width="100%" target="_blank">
            <BlogImage src={data.preview} />
          </Link>
          <Container
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Link href={data.url} target="_blank">
              <Title fontSize="2rem" as="h2">
                {data.title}
              </Title>
            </Link>
            <Link href={data.url} target="_blank">
              <BlogButton variant="secondary">View Blog</BlogButton>
            </Link>
          </Container>
          <Container gridGap="1rem">
            <Text
              textAlign="start"
              margin={0}
              lineHeight="180%"
              letterSpacing="0.02rem"
            >
              {data.caption}
            </Text>
          </Container>
        </BlogContainer>
      ))}
    </Grid>
  </Container>
);

export const getStaticProps: GetStaticProps = async () => {
  const Blogs = await getPosts('blogs');

  Blogs.sort((first, second) => first.data.order - second.data.order);

  return {
    props: {
      Blogs,
    },
  };
};

export default Blogs;
