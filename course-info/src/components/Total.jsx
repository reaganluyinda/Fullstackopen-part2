const Total = ({ parts }) => {
  console.log(parts);
  return (
    <div>
      <p>
        <strong>
          Total of{" "}
          {parts
            .map((part) => part.exercises)
            .reduce((sum, exc) => sum + exc, 0)}{" "}
          exercises
        </strong>
      </p>
    </div>
  );
};

export default Total;
