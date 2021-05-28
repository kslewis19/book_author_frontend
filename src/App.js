import PageView from './components/PageView'
import './App.css';
import { Route, Switch } from "react-router-dom";
import LibraryDisplay from './components/LibraryDisplay'
import ErrorComponent from "./components/ErrorComponent";
import background from "./components/background.jpg";
function App() {
  return (
    <div style={{ backgroundImage: `url(${background})`, height: "100vh", backgroundPosition: "center", backgroundSize: "cover" }}>
      <Switch>
        <Route path="/" component={PageView} exact />
        <Route path="/library" component={LibraryDisplay} />
        <Route component={ErrorComponent} />S
      </Switch>
    </div>

  );
}

export default App;
