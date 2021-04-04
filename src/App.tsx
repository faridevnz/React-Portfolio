import { Home } from './pages/Home/Home';
import { ResponsiveProvider } from './context/ResponsiveContext/ResponsiveContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Blog } from './pages/Blog/Blog';
import { Contacts } from './pages/Contacts/Contacts';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <ResponsiveProvider>
      <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/contacts">
              <Contacts></Contacts>
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
