
import './App.css';
import Home from './user/home'
import Login from './sign/Login';
import Register from './sign/Register'
import Header from './common/Header'
import Footer from './common/Footer'
import NotFound from './common/NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
