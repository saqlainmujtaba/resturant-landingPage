import krunch from "../assets/bestsellers/krunch.png";
import chickChips from "../assets/bestsellers/chickChips.png";
import hotWingsBucket from "../assets/bestsellers/hotWingsBucket.png";
import krunchCombo from "../assets/bestsellers/krunchCombo.png";
import mightyZinger from "../assets/bestsellers/mightyZinger.png";

import "../styles/components/bestSeller.css";

const BestSellers = () => {
  return (
    <>
      <div className="bestSellers">
        <h1>Best Sellers</h1>
        <div className="bsItems">
          <div className="bsItem">
            <div className="bsTitle">
              <h2>Krunch Burger</h2>
            </div>
            <div className="price">
              <h3>
                Rs.<strong>630</strong>
              </h3>
            </div>
            <div className="bsImage">
              <img src={krunch} />
            </div>
          </div>
          <div className="bsItem">
            <div className="bsTitle">
              <h2>Krunch Combo</h2>
            </div>
            <div className="price">
             <h3>
                Rs.<strong>630</strong>
              </h3>
            </div>
            <div className="bsImage">
              <img src={krunchCombo} />
            </div>
          </div>
          <div className="bsItem">
            <div className="bsTitle">
              <h2>Chick & Chips</h2>
            </div>
            <div className="price">
              <h3>
                Rs.<strong>630</strong>
              </h3>
            </div>
            <div className="bsImage">
              <img src={chickChips} />
            </div>
          </div>
          <div className="bsItem">
            <div className="bsTitle">
              <h2>Hot Wings Bucket</h2>
            </div>
            <div className="price">
             <h3>
                Rs.<strong>630</strong>
              </h3>
            </div>
            <div className="bsImage">
              <img src={hotWingsBucket} />
            </div>
          </div>
          <div className="bsItem">
            <div className="bsTitle">
              <h2>Mighty Zinger</h2>
            </div>
            <div className="price">
             <h3>
                Rs.<strong>630</strong>
              </h3>
            </div>
            <div className="bsImage">
              <img src={mightyZinger} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSellers;
