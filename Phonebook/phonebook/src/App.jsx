import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-854626" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  // Event handler for form submission
  const addPerson = (event) => {
    event.preventDefault();
    const personObject = { name: newName, number: newNumber };
    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  // Check for duplicate names
  const nameExists = persons.some((person) => person.name === newName);
  if (nameExists) {
    alert(`${newName} is already added to phonebook`);
    return;
  }

  // Event handler for input field changes
  const handleNameChange = (event) => {
    console.log(event.target.value);

    setNewName(event.target.value);
  };

  // Event handler for number input field changes
  const handleNumberChange = (event) => {
    console.log(event.target.value);

    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => {
          return (
            <li key={person.name}>
              {person.name} {person.number}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default App;
