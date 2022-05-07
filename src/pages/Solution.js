import React from "react";
import { BodySolution, HeaderSolution } from "../components";
import Layout from "../layout/Layout";

const SolutionData = [
  {
    title: "Incididunt duis aute qui",
    description:
      "Deserunt laboris dolore quis aliqua culpa incididunt in.Est ex nisi ea nisi incididunt irure officia est velit id proident reprehenderit.",
    imgSrc:
      "https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    reverse: true,
  },
  {
    title: "Incididunt duis aute qui",
    description:
      "Deserunt laboris dolore quis aliqua culpa incididunt in.Est ex nisi ea nisi incididunt irure officia est velit id proident reprehenderit.",
    imgSrc:
      "https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    reverse: false,
  },
  {
    title: "Incididunt duis aute qui",
    description:
      "Deserunt laboris dolore quis aliqua culpa incididunt in.Est ex nisi ea nisi incididunt irure officia est velit id proident reprehenderit.",
    imgSrc:
      "https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    reverse: true,
  },
];
const Solution = () => (
  <Layout>
    <HeaderSolution />
    {SolutionData.map((data, index) => (
      <BodySolution
        title={data.title}
        description={data.description}
        src={data.imgSrc}
        reverse={data.reverse}
      />
    ))}
  </Layout>
);

export default Solution;
