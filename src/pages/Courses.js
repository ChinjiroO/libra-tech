import React from "react";
import { HeaderCourse, HeroBottom, ListSection } from "../components";
import Layout from "../layout/Layout";
import { connect } from "react-redux";

import Course1 from "../assets/images/course-1.png";
import Course2 from "../assets/images/course-2.png";
import Course3 from "../assets/images/course-3.png";
import Course4 from "../assets/images/course-4.png";
import Course5 from "../assets/images/course-5.png";
import Course6 from "../assets/images/course-6.png";

const Images = [Course1, Course2, Course3, Course4, Course5, Course6];

const mapStateToProps = (state) => {
  return {
    courses: state.data.courses,
  };
};

const Courses = ({ courses }) => {
  return (
    <Layout>
      <HeaderCourse
        heading="Our Courses"
        paragraph="Dolore eiusmod fugiat labore Lorem labore magna proident veniam minim commodo veniam."
        images={Images}
      />
      <ListSection data={courses} />
      <HeroBottom />
    </Layout>
  );
};

export default connect(mapStateToProps)(Courses);
