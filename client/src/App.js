import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.scss';
import Header from "./components/Header/Header";
import OrdersPage from "./pages/OrdersPage/OrdersPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      <Switch>
        <Route path="/orderspage" component={OrdersPage} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
