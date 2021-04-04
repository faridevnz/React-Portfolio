import { Home } from './pages/Home/Home';
import { ResponsiveProvider } from './context/ResponsiveContext/ResponsiveContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Blog } from './pages/Blog/Blog';
import { Navbar } from './components/Navbar/Navbar';
import { Contributions } from './pages/Contributions/Contributions';
import { Projects } from './pages/Projects/Projects';

function App() {
  return (
    <ResponsiveProvider>
      <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/contributions">
              <Contributions></Contributions>
            </Route>
            <Route path="/projects">
                <Projects></Projects>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
      </Router>
    </ResponsiveProvider>
  );
}

export default App;
