import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { HeroBottom, DetailSection } from "../components";
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
    setJob(jobs.filter((course) => course.id === parseInt(id)));
  }, [jobs, id]);
  return (
    <Layout>
      <DetailSection data={job[0]} />
      <HeroBottom />
      <div className="min-h-[600px]">suggest</div>
    </Layout>
  );
};

export default connect(mapStateToProps)(JobDetails);
