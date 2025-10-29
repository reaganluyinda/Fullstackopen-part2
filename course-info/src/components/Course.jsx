// Component to render the header of the course
const Header = ({ course }) => (
  <div>
    <h2>{course}</h2>
  </div>
);

// Component to render each part of the course
const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

// Component to render the content of the course
const Content = ({ parts }) => (
  <div>
    {parts.map((part) => (
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    ))}
  </div>
);

// Component to calculate and render the total number of exercises
const Total = ({ parts }) => {
  const totalParts = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      <p>
        <strong>Total of {totalParts} exercises</strong>
      </p>
    </div>
  );
};

// Main Course component to render all courses
const Course = ({ courses }) => {
  // console.log(courses);
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      ))}
    </div>
  );
};

export default Course;
