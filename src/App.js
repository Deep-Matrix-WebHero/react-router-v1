// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Friends from "./components/Friends/Friends";
import NotFound from "./components/NotFound/NotFound";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import FriendDetails from "./components/FriendDetails/FriendDetails";
import Culture from "./components/Culture/Culture";
import PostDetail from "./components/PostDetail/PostDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/about/culture">
            <Culture></Culture>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/friend/:friendID">
            <FriendDetails></FriendDetails>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path={`/post/:postID`}>
            <PostDetail></PostDetail>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

      {/* <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/friends">
            <Friends></Friends>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route> */}
      {/* exact দিলে একমাত্র ওই path এই যাবে।  */}
      {/* <Route exact path="/">
            <Home></Home>
          </Route> */}
      {/*path set করে না দিলে notFound দেখাবে।  */}
      {/* <Route>
            <NotFound></NotFound>
          </Route> */}
      {/* path এ * দিলে not foundদেখায়। কোড: path="*" */}
      {/* <Route path="*">
            <NotFound></NotFound>
          </Route> */}
      {/* </Switch>
      </BrowserRouter> */}
      {/* <About></About>
      <Home></Home>
      <Friends></Friends>
      <NotFound></NotFound>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
