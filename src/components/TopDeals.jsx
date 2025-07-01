import CrispyDuoBox from "../assets/topDeals/CrispyDuoBox.png";
import familyFestivle from "../assets/topDeals/familyFestivle.png";
import valueBucket from "../assets/topDeals/valueBucket.png";
import XtremeDuoBox from "../assets/topDeals/XtremeDuoBox.png";

import "../styles/components/topDeals.css";

const TopDeals = () => {
  return (
    <>
      <div className="topDeals">
        <h1>Top Deals</h1>
        <div className="tdItems">
          <div className="tdItem">
            <div className="display">
              <div className="tdImage">
                <img src={CrispyDuoBox} />
              </div>
              <div className="tdTitle">
                <h2>Crispy Duo Box</h2>
              </div>
              <div className="tdDescription">
                <p>
                  Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large
                  fries + 2 Regular drinks
                </p>
              </div>
              <div className="tdPrice">
                <h3>
                  Rs.<strong>630</strong>
                </h3>
              </div>
            </div>
            <div className="addToBucket">
              <p>
                <span className="plus">+</span> <strong>Add to Bucket</strong>
              </p>
            </div>
          </div>
          <div className="tdItem">
            <div className="display">
              <div className="tdImage">
                <img src={familyFestivle} />
              </div>
              <div className="tdTitle">
                <h2>Krunch Combo</h2>
              </div>
              <div className="tdDescription">
                <p>
                  Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large
                  fries + 2 Regular drinks
                </p>
              </div>
              <div className="tdPrice">
                <h3>
                  Rs.<strong>630</strong>
                </h3>
              </div>
            </div>
            <div className="addToBucket">
              <p>
                + <strong>Add to Bucket</strong>
              </p>
            </div>
          </div>
          <div className="tdItem">
            <div className="display">
              <div className="tdImage">
                <img src={valueBucket} />
              </div>
              <div className="tdTitle">
                <h2>Chick & Chips</h2>
              </div>
              <div className="tdDescription">
                <p>
                  Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large
                  fries + 2 Regular drinks
                </p>
              </div>
              <div className="tdPrice">
                <h3>
                  Rs.<strong>630</strong>
                </h3>
              </div>
            </div>
            <div className="addToBucket">
              <p>
                +<strong>Add to Bucket</strong>
              </p>
            </div>
          </div>
          <div className="tdItem">
            <div className="display">
              <div className="tdImage">
                <img src={XtremeDuoBox} />
              </div>
              <div className="tdTitle">
                <h2>Hot Wings Bucket</h2>
              </div>
              <div className="tdDescription">
                <p>
                  Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large
                  fries + 2 Regular drinks
                </p>
              </div>
              <div className="tdPrice">
                <h3>
                  Rs.<strong>630</strong>
                </h3>
              </div>
            </div>
            <div className="addToBucket">
              <p>
                +<strong>Add to Bucket</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopDeals;
