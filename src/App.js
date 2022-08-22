import "./App.css";
import {
  Exchanges,
  HomePage,
  News,
  Cryptocurrencies,
  CryptoDetails,
  NavBar,
} from "./components";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
function App() {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Copyright © 2022 <br />
            <Link to="/" id="link">
              CryptoNet
            </Link>
            <br />
            All Rights Reserved.
            <p>@Amaan</p>
          </Typography.Title>
          <Space>
            <Link to="/" className="Links">
              Home
            </Link>
            <Link to="/cryptocurrencies " className="Links">
              Cryptocurrencies
            </Link>
            <Link to="/exchanges" className="Links">
              Exchanges
            </Link>
            <Link to="/news" className="Links">
              News
            </Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
