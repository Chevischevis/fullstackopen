
import './App.css'

const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul>
    </div>
  )
}

var animals = [{name: 'Sofia', species: 'cat'},
               {name: 'Rex', species: 'dog'}, 
               {name: 'Nemo', species: 'fish'},
               {name: 'Fido', species: 'dog'}];
                  
var isdog = function(animal) {
  return animal.species === 'dog';
};
var dogs = animals.filter(isdog);
console.log(dogs);
//var names = dogs.map(function(animal) { return animal.name + ' is a ' + animal.species; });

var names = animals.map((animal) => `${animal.name} is a ${animal.species}`);

console.log(names);

export default App
