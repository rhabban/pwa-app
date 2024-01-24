import { requestPermission, showNotification } from './notification';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="notification-container">
        <button
          id="notification-permission-button"
          onClick={() => requestPermission()}
        >
          Enable Notifications
        </button>
        <button
          id="show-notification-button"
          onClick={() => showNotification("Yes, it worked!")}
        >
          Show Notification
        </button>
      </div>
    </div>
  );
}

export default App;
