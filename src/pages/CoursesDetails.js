import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { HeroBottom, DetailSection, SuggestSection } from "../components";
import Layout from "../layout/Layout";

const mapStateToProps = (state) => {
  return {
    courses: state.data.courses,
  };
};

const CoursesDetails = ({ courses }) => {
  let id = useParams().id;
  const [course, setCourse] = useState([]);

  useEffect(() => {
    setCourse(courses.filter((course) => course.id === parseInt(id)));
  }, [courses, id]);

  return (
    <Layout>
      <DetailSection data={course[0]} />
      <HeroBottom />
      <SuggestSection title="Courses" data={courses.slice(0, 3)} />
    </Layout>
  );
};

export default connect(mapStateToProps)(CoursesDetails);
