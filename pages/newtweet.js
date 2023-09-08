import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import NewTweet from '../components/NewTweet';
import UserNavbar from '../components/UserNavbar';
import { Container, Form, Button } from 'react-bootstrap';
import { parseCookies } from 'nookies';

const NewTweetPage = () => {
  const router = useRouter();
  const { authToken } = parseCookies();
    let user;
    if (authToken) {
        user = JSON.parse(authToken);
    }

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, []);

  return (
    <Container>
      {user && <UserNavbar />}
      {user && <NewTweet />}
    </Container>
  );
};

export default NewTweetPage;

