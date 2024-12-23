import React from 'react';
import Header from './components/Header';
import Footer from './components/footer'; // Fixed casing to match the correct component name
import HomePage from './pages/homePage';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Add your main content here */}
       <HomePage/>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default App;
