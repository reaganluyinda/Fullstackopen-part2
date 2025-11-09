import Person from "./person.jsx";
const Persons = ({ filteredPersons, removeEntry }) => {
  // console.log(filteredPersons);

  return (
    <div>
      {filteredPersons.map((person) => {
        return (
          <Person
            key={person.name}
            name={person.name}
            number={person.number}
            onDelete={() => removeEntry(person.id)}
          />
        );
      })}
    </div>
  );
};

export default Persons;
