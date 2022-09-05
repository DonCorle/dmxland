/* eslint-disable */
import React from "react";
import Layout from "../../Components/Layout";
import { useFetchUser } from "../../lib/authContext";

function Home() {
  const { user } = useFetchUser();

  return (
    <Layout>
      <div className="app">
        <div className="app-nav">
          <h1>Home</h1>
        </div>
        <h2>Welcome {user}</h2>
      </div>
    </Layout>
  );
}

export default Home;
