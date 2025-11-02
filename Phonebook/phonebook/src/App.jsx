import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  // Event handler for form submission
  const addPerson = (event) => {
    event.preventDefault();
    const personObject = { name: newName };
    setPersons(persons.concat(personObject));
    setNewName("");
  };

  // Event handler for input field changes
  const handleNameChange = (event) => {
    console.log(event.target.value);

    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => {
          return <p key={person.name}>{person.name}</p>;
        })}
      </div>
    </div>
  );
};

export default App;
