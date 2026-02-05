import React from 'react';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { Loans } from './pages/Loans';
import { Login } from './pages/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <DashboardLayout>
      <Loans />
    </DashboardLayout>
  );
}

export default App;
