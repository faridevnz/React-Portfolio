import { Home } from './pages/Home/Home';
import { ResponsiveProvider } from './context/ResponsiveContext/ResponsiveContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Blog } from './pages/Blog/Blog';
import { Navbar } from './components/Navbar/Navbar';
import { Contributions } from './pages/Contributions/Contributions';
import { Projects } from './pages/Projects/Projects';
import { ThemeProvider } from './context/ThemeContext/ThemeContext';
// import { Article } from './pages/Article/Article';

function App() {
  return (
    <ResponsiveProvider>
      <ThemeProvider>
        <Router>
            <Navbar></Navbar>
            <Switch>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/contributions">
                <Contributions />
              </Route>
              <Route path="/projects">
                  <Projects />
              </Route>
              {/* <Route path="/article-example">
                <Article />
              </Route> */}
              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </Router>
      </ThemeProvider>
    </ResponsiveProvider>
  );
}

export default App;
