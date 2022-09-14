
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function Container() {

  const renderPage = () => {
    if ('Home') {
      return <Home />;
    }
    if ('About') {
      return <About />;
    }
    if ( 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };



  return (
    <div>
      {renderPage()}
    </div>
    
  );
}
