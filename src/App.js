import { useState, useEffect } from "react";
import "./App.css";
import Cardlist from "./Components/Card-list/Card-list.components";
import Searchbox from "./Components/Search-box/Search-box.components";

const App = () => {
  const [searchfiled, setsearchfiled] = useState(""); //[value, setvalue]
  const [monsters, setmonsters] = useState([]);
  const [filtermonstername, setfiltermonsters] = useState(monsters);
console.log('render');
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setmonsters(users));
  }, []);

  useEffect(() => {
    const newfiltermonstername = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchfiled);
    });
    setfiltermonsters(newfiltermonstername);
  }, [monsters, searchfiled]);

  const onsearchchange = (events) => {
    const searchfiledstring = events.target.value.toLocaleLowerCase();
    setsearchfiled(searchfiledstring);
  };

  return (
    <div className="App">
      <h1 className="app-tiltle">Monster Rolodex</h1>

      <Searchbox
        changename={onsearchchange}
        placeholder="search monsters"
        className="monsters-search-box"
      />
      <Cardlist monsters={filtermonstername} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchfiled: "",
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return {
//               monsters: users,
//             };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }
//   onsearchchange = ;
//   render() {
//     const { monsters, searchfiled } = this.state;
//     const { onsearchchange } = this;

//     });
//     return (
//     );
//   }
// }
export default App;
