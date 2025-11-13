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
      const confirmAdd = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );

      if (confirmAdd) {
        const person = persons.find(
          (person) => person.name.toLowerCase() === newName.toLowerCase()
        );
        const changedPerson = { ...person, number: newNumber };

        personService
          .update(person.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((p) => (p.id !== person.id ? p : returnedPerson))
            );
            setNewName("");
            setNewNumber("");
          });
      }
      return;
    }
    // If not duplicate, add the new person
    const personObject = { name: newName, number: newNumber };

    personService.create(personObject).then((returnedPerson) => {
      console.log("user added sucessfully");

      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
    });
  };

  const removeEntry = (id) => {
    const person = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService.remove(id).then(() => {
        console.log(`deleted ${person.name} successful`);

        setPersons(persons.filter((p) => p.id !== id));
      });
    }
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
      <Persons filteredPersons={filteredPersons} removeEntry={removeEntry} />
    </div>
  );
};

export default App;
