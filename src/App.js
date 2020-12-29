import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";
//Slug: The term "slug" refers to a string of text that is URL-safe.slugs are used where necessary in the URL path.
export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/" className="hi">
          Home
        </Link>
        <Link to="/launch" className="hi">
          Shoes
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="launch" element={<Launch />}>
          <Route path="/" element={<LaunchIndex />} />
          <Route path=":slug" element={<LaunchShoe />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome Back To My Store :)</h1>
      <h1>Click Shoes Link to view some nike shoes in my store :)</h1>
    </div>
  );
}

function Launch() {
  return (
    <div>
      <h1>These are the shoes collection of nike :)</h1>

      <Outlet />
    </div>
  );
}

function LaunchIndex() {
  return (
    <ul>
      {Object.entries(shoes).map(([slug, { name, img }]) => (
        <li key={slug}>
          <Link to={`/launch/${slug}`}>
            <h1>{name}</h1>
            <img src={img} alt={name} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function LaunchShoe() {
  const { slug } = useParams();
  const shoe = shoes[slug];

  if (!shoe) {
    return <h1>Not Found!</h1>;
  }

  const { name, img } = shoe;

  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt={name} />
    </div>
  );
}

const shoes = {
  "air-jordan-3-valor-blue": {
    name: "Valour Blue",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "jordan-mars-270-london": {
    name: "Jordan Mars 270 London",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "Racer Blue",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
};
