import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faBell, faCoffee, faCog, faBorderAll, faUsers, faCalendar, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import HomePage from './pages/HomePage';
library.add(fab, faBell, faCheckSquare, faCoffee, faCog, faBorderAll, faUsers, faCalendar, faEnvelope, faClock)


function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
