import React from 'react';
import { Title, Text, Container, Grid, Link, Card } from '@components';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import {
  SiSpringboot,
  SiAngular,
  SiJavascript,
  SiMysql,
  SiJenkins,
  SiAnsible,
  SiNodedotjs,
  SiReact,
  SiHtml5,
  SiCss3,
  SiPython,
} from 'react-icons/si';

import {FaJava} from 'react-icons/fa';

import { getPosts, Post } from '@posts';
import { TransparentLink } from '@components';

interface AboutProps {
  experiences: Post[];
}

const stacks = [
  {
    Icon: FaJava,
    url: 'https://www.java.com/en/',
  },
  {
    Icon: SiSpringboot,
    url: 'https://spring.io/projects/spring-boot',
  },
  {
    Icon: SiAngular,
    url: 'https://angular.io/',
  },
  {
    Icon: SiJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    Icon: SiReact,
    url: 'https://reactjs.org/',
  },
  {
    Icon: SiNodedotjs,
    url: 'https://nodejs.org/en',
  },
  {
    Icon: SiMysql,
    url: 'https://www.mysql.com/',
  },
  {
    Icon: SiJenkins,
    url: 'https://www.jenkins.io/',
  },
  {
    Icon: SiAnsible,
    url: 'https://www.ansible.com/',
  },
  {
    Icon: SiHtml5,
    url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
  },
  {
    Icon: SiCss3,
    url: 'https://www.css3.com/',
  },
  {
    Icon: SiPython,
    url: 'https://www.python.org/',
  },
];

const About = ({ experiences }: AboutProps): JSX.Element => (
  <Container>
    <Head>
      <title>About</title>
    </Head>
    <Container alignContent="center" alignItems="center">
      <Title fontSize="40px" as="h2">
        Summary
      </Title>
      <Container maxWidth={['100%', '720px']} marginY="2rem">
        <Text textAlign="justify">
          Hello! My name is Priyansh Shah and I am currently pursuing a Masters of Science in Computer Science at CSU, Long Beach.
          I am also a former Software Engineer <a href="https://group.bnpparibas/en/" target="_blank">@BNP Paribas</a> in Bengaluru, India.
        </Text>
        <Text textAlign="justify">I am a Full Stack developer with experience in Backend, Frontend, DevOps, and Desktop development.
        In addition to my love for technology and software, my passions include cricket, table tennis, and badminton.
        </Text>
        
      </Container>
    </Container>

    <Container
      paddingY="4rem"
      gridGap="2rem"
      alignContent="center"
      alignItems="center"
      textAlign="center"
      width="100%"
    >
      <Title fontSize="40px" as="h2">
        Technologies I frequently use
      </Title>
      <Grid
        gridTemplateColumns={['repeat(3 , 1fr)', 'repeat(6 , 1fr)']}
        gridGap="1rem"
        justifyItems="center"
        maxWidth="40rem"
      >
        {stacks.map(({ Icon, url }, i) => (
          <Link href={url} key={url}>
            <Card key={i}>
              <Icon size="2rem" />
            </Card>
          </Link>
        ))}
      </Grid>
    </Container>
    <Container
      alignContent="center"
      alignItems="center"
      textAlign="center"
      width="100%"
      paddingBottom="4rem"
      gridGap="3rem"
    >
      <Title fontSize="40px" as="h2">
        Work Experience
      </Title>
      <Container width="100%">
        {experiences.map(({ data }, i) => (
          <TransparentLink href={`/about/${data.slug}`} key={data.slug}>
            <Grid
              key={i}
              gridTemplateColumns="1fr 4fr"
              justifyItems="flex-start"
              gridGap="1rem"
              paddingY="2rem"
              borderBottom="1px solid rgba(0,0,0,0.1)"
            >
              <Container width="100%">
                <Text>0{experiences.length - i}</Text>
              </Container>
              <Grid width="100%" gridTemplateColumns="4fr 1fr">
                <Container
                  width="100%"
                  alignItems="flex-start"
                  textAlign="start"
                >
                  <Grid
                    width="100%"
                    gridTemplateColumns="repeat(2, auto)"
                    justifyItems="flex-start"
                    justifyContent="flex-start"
                    gridGap="1rem"
                  >
                    <Title fontSize="1.5rem" margin={0} as="h3">
                      {data.title}
                    </Title>
                    <Text fontSize="smaller" margin={0}>
                      {data.date}
                    </Text>
                  </Grid>
                  <Text fontSize="1rem">{data.caption}</Text>
                </Container>
                <Text fontSize="1.5rem">&rarr;</Text>
              </Grid>
            </Grid>
          </TransparentLink>
        ))}
      </Container>
    </Container>
  </Container>
);

export const getStaticProps: GetStaticProps = async () => {
  const experiences = await getPosts('experiences');
  experiences.sort((a, b) =>
    b.data.date.toString().localeCompare(a.data.date.toString()),
  );

  return {
    props: {
      experiences,
    },
  };
};

export default About;
