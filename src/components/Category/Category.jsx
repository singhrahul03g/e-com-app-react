import Footer from "../Footer/Footer";
import Newsletter from "../Footer/Newsletter/Newsletter";
import Header from "../Header/Header";
import "./Category.scss";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="root-div">
      <Header />
      <div className="category-section">
        <div className="category-content">
          <h1>All Categories</h1>

          <div className="first-div">
            <h1>Fashion</h1>
            <div className="second-div">
              <ul>
                <li className="list-item">
                  <Link className="item-link" to="/about">
                    hello
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="item-link" to="/about">
                    hello
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="item-link" to="/about">
                    hello
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="item-link" to="/about">
                    hello
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="item-link" to="/about">
                    hello
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="item-link" to="/about">
                    hello
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="item-link" to="/about">
                    hello
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="item-link" to="/about">
                    hello
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="first-div">
            <h1>Fashion</h1>
            <div className="second-div">
              <ul>
                <li className="list-item">
                  <Link className="item-link" to="/about">
                    hello
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="item-link" to="/about">
                    hello
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="item-link" to="/about">
                    hello
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="item-link" to="/about">
                    hello
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="item-link" to="/about">
                    hello
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="item-link" to="/about">
                    hello
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="item-link" to="/about">
                    hello
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="item-link" to="/about">
                    hello
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="first-div">
            <h1>Fashion</h1>
            <div className="second-div">
              <ul>
                <li className="list-item">
                  <Link className="item-link" to="/about">
                    hello
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="item-link" to="/about">
                    hello
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="item-link" to="/about">
                    hello
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="item-link" to="/about">
                    hello
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="item-link" to="/about">
                    hello
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="item-link" to="/about">
                    hello
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="item-link" to="/about">
                    hello
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="item-link" to="/about">
                    hello
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Category;
