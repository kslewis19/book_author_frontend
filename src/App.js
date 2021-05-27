import PageView from './components/PageView'
import './App.css';
import { Route, Switch } from "react-router-dom";
import LibraryDisplay from './components/LibraryDisplay'
import ErrorComponent from "./components/ErrorComponent";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={PageView} exact />
        <Route path="/library" component={LibraryDisplay} />
        <Route component={ErrorComponent} />
      </Switch>
    </div>

  );
}

export default App;
