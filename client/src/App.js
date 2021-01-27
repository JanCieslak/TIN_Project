import 'tachyons';
import Nav from './components/Nav';
import Tables from "./components/Tables";
import SignIn from './components/SignIn';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function App() {
  return (
    <div className="sans-serif">
      <Nav />
      <Tables />
      {/* < SignIn /> */}
      {/* < SignUp /> */}
      <NotificationContainer />
    </div>
  );
}

export default App;
