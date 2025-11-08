import { useEffect, useState } from "react";
import Filter from "./Components/filter.jsx";
import Form from "./Components/form.jsx";
import Persons from "./Components/content.jsx";
import axios from "axios";
import personService from "./services/persons.js";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  // Fetch initial data from the server
  useEffect(() => {
    console.log("Effect");
    personService.getAll().then((intialpersons) => {
      console.log("Promise fulfilled");
      setPersons(intialpersons);
    });
  }, []);

  // Event handler for form submission
  const addPerson = (event) => {
    event.preventDefault();

    // Check for duplicate names
    const nameExists = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    // If not duplicate, add the new person
    const personObject = { name: newName, number: newNumber };
    axios;
    personService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
    });
  };

  // Filter persons based on the filter state
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Event handler for input field changes
  const handleNameChange = (event) => setNewName(event.target.value);

  // Event handler for number input field changes
  const handleNumberChange = (event) => setNewNumber(event.target.value);

  // Event handler for filter input field changes
  const handleFilterChange = (event) => setFilter(event.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <h2>Add a new</h2>
      <Form
        onSubmit={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
