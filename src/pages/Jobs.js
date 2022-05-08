import React from "react";
import Layout from "../layout/Layout";
import { HeaderCourse, HeroBottom, ListSection } from "../components";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    jobs: state.data.jobs,
  };
};

const Jobs = ({ jobs }) => (
  <Layout>
    <HeaderCourse
      heading="Our Jobs"
      paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
    />
    <ListSection data={jobs} />
    <HeroBottom />
  </Layout>
);

export default connect(mapStateToProps)(Jobs);
