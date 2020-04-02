import React from "react";
import Planner from "../../components/Planner";
import { useStateValue } from "../../context/StateContext";
import Layout from "../../hoc/Layout";

const Home = () => {
  const [value] = useStateValue();
  console.log(value);
  return (
    <Layout>
      <Planner />
    </Layout>
  );
};

export default Home;
