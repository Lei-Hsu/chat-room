import React, { useState } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { Box, Button, FormControl, TextField } from '@material-ui/core';

interface LoginDataType {
  account: string;
  password: string;
}

function Home() {
  const route = useRouter();
  const [loginData, setLogInData] = useState<LoginDataType>(null);

  const handleSubmit = () => {
    console.log(loginData);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box style={{ marginBottom: '40px' }}>
        <h1 className="text-2xl">Hello to BT Chat</h1>
      </Box>

      <Box style={{ width: '250px' }}>
        <Box style={{ display: 'flex', flexDirection: 'column' }}>
          <FormControl style={{ marginBottom: '15px' }}>
            <TextField
              label="Account"
              onChange={(e) =>
                setLogInData({
                  ...loginData,
                  account: e.target.value,
                })
              }
            />
          </FormControl>
          <FormControl style={{ marginBottom: '24px' }}>
            <TextField
              label="Password"
              type="password"
              onChange={(e) =>
                setLogInData({
                  ...loginData,
                  password: e.target.value,
                })
              }
            />
          </FormControl>
        </Box>
        <Box style={{ display: 'flex', justifyContent: 'space-between', width: 'auto' }}>
          <Button variant="contained" color="primary" disableElevation onClick={handleSubmit}>
            Login
          </Button>
          <Button color="primary" disableElevation onClick={() => route.push('/signIn')}>
            SignIn
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
