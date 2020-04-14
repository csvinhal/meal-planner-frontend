import React from "react";
import Planner from "../../components/Planner";
import Layout from "../../hoc/Layout";

const Home = () => {
  return (
    <div className="page">
      <Layout>
        <Planner />
      </Layout>
    </div>
  );
};

export default Home;
