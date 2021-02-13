import './App.scss';
import { 
  HeaderComponent as Header, 
  HomeComponent as Home, 
  AboutComponent as About,
  FeedComponent as Feed,
  ContactComponent as Contact,
  FooterComponent as Footer
} from "./components/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

// https://create-react-app.dev/docs/getting-started/
// https://create-react-app.dev/docs/adding-a-sass-stylesheet/
// https://stackoverflow.com/questions/49162311/react-difference-between-route-exact-path-and-route-path
// https://stackoverflow.com/questions/64936044/fix-the-upstream-dependency-conflict-installing-npm-packages
// npm install <package_name> --legacy-peer-deps
// https://fontawesome.com/how-to-use/on-the-web/using-with/react

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("api/db/db.json") // http://localhost:3004/items
    // .then((res) => {
    //   console.log(res.data);
    //   setItems(res.data);
    // })
    .then(({data}) => {
      console.log(typeof(data));
      setItems(typeof(data) == "object" ? data["items"] : data);
    })
    .catch((err) => {
      console.error(err);
    })
  }, []);

  return (
    <>
      <Router>
        <Header items={items} />
        
        <main className="container">
          <section>
            <Switch>
              {/* <Route exact path="/" component={Home} />   */}
              {/* if not given exact keyword here, when it finds "/" as a first char, it returns home*/}
              {/* "/" path changed to "/tweeact", it causes to return website homepage not limited to it's own directory*/}
              <Route path="/tweeact" component={Home} /> 
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} /> 
            </Switch>
          </section>
        </main>

      </Router>
    </>
  );
}

export default App;
