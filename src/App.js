import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faBell, faCoffee, faCog, faBorderAll, faUsers, faCalendar, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ClientDashboard from './layouts/ClientDashboard';
library.add(fab, faBell, faCheckSquare, faCoffee, faCog, faBorderAll, faUsers, faCalendar, faEnvelope, faClock)


function App() {
  return (
    <div className="App">
      <ClientDashboard />
    </div>
  );
}

export default App;
