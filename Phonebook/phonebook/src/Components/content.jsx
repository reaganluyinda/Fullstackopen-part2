import Person from "./person.jsx";
const Persons = ({ filteredPersons }) => {
  // console.log(filteredPersons);

  return (
    <div>
      {filteredPersons.map((person) => {
        return (
          <Person key={person.name} name={person.name} number={person.number} />
        );
      })}
    </div>
  );
};

export default Persons;
