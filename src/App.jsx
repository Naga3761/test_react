import React from 'react';
import LoginFormComponent from './LoginFormComponent'; // Make sure the path is correct

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>
        <p>This is the main application container.</p>
      </header>
      
      {/* 🔑 Inject your Login Component here */}
      <main>
        <LoginFormComponent />
      </main>
      
    </div>
  );
}

export default App;
