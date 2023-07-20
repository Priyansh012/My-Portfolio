import React from 'react';
import Image from 'next/image';
import { Container, Title, Button, Link, Text } from '@components';
import styles from '@styles/Home.module.css';

const Home = (): JSX.Element => (
  <Container>
    <Container
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      textAlign="center"
      paddingY="25px"
      paddingBottom="40px"
      gridGap="4rem"
    >
      <Container alignItems="center" alignContent="center">
        <Image
          src="/2.png"
          alt="Priyansh Shah"
          width={120}
          height={120}
          //objectFit="cover"
          className={styles.image}
        />
        <Title>Priyansh Shah</Title>
        <Title
          fontSize="2rem"
          color="rgba(0, 0, 0, 0.6)"
          fontWeight="500"
          as="h2"
        >
          Software Engineer - CS Grad Student.
        </Title>
      </Container>
      <Container maxWidth="700px" gridGap="3rem">
        <Container>
          <Text textAlign="justify">
          Hello! My name is Priyansh Shah and I am currently pursuing a Master's of Science in Computer Science at CSU, Long Beach.
I'm also a former Software Engineer <a href="https://group.bnpparibas/en/" target="_blank">@BNP Paribas</a> in Bengaluru, India.
          </Text>
        </Container>
        <Link href="/about">
          <Button>More about me &rarr;</Button>
        </Link>
      </Container>
    </Container>

    <Container alignItems="center" paddingY="4rem">
      <Container maxWidth="600px" alignItems="center" alignContent="center">
        <Title fontSize="3rem" as="h3">
          Contact
        </Title>
        <Text textAlign="center">
          Drop me an email to get in touch!
        </Text>
        <Link href="mailto:shahpriyansh598@gmail.com">
          <Button width="100%">
            Say Hello
          </Button>
        </Link>
      </Container>
    </Container>
  </Container>
);

export default Home;
