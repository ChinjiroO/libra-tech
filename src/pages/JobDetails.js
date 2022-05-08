import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { HeroBottom, DetailSection, SuggestSection } from "../components";
import Layout from "../layout/Layout";

const mapStateToProps = (state) => {
  return {
    jobs: state.data.jobs,
  };
};

const JobDetails = ({ jobs }) => {
  let id = useParams().id;
  const [job, setJob] = useState([]);

  useEffect(() => {
    setJob(jobs.filter((job) => job.id === parseInt(id)));
  }, [jobs, id]);

  return (
    <Layout>
      <DetailSection data={job[0]} />
      <HeroBottom />
      <SuggestSection title="Jobs" data={jobs.slice(0, 3)} />
    </Layout>
  );
};

export default connect(mapStateToProps)(JobDetails);
