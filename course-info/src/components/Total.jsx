const Total = ({ parts }) => {
  const totalParts = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      <p>
        <strong>
          Total of {totalParts}
          exercises
        </strong>
      </p>
    </div>
  );
};

export default Total;
