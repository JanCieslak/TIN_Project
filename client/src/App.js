import 'tachyons';
import Games from './components/Games';
import Tables from "./components/Tables";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="sans-serif">
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/tables" component={Tables} />
        <Route exact path="/" component={Games} />
        <NotificationContainer />
      </div>
    </Router>
  );
}

export default App;
