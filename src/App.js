import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NavBar from './components/Navbar';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import Categories from './components/Categories';

const App = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <BookList />
        <AddBook />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
    </Switch>

  </Router>
);

export default App;
