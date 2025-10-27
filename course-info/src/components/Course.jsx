import Header from "./Header";
import Content from "./Content";
import Total from "./Total";
const Course = (props) => {
  const { course } = props;
  //   console.log(course);
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      {/* <Total parts={course.parts} /> */}
    </div>
  );
};

export default Course;
