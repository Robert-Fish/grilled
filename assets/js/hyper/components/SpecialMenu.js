import { h, app } from "hyperapp";

export default function SpecialMenu({ state, actions }) {
  return (
    <section className="SpecialMenu">
      <div className="container">
        <h5 className="comp-title">Special Menu</h5>
        <h2>Delicious Flavour of Autumnn</h2>
        <div className="row boxes">
          <div className="col-md-4">
            <div className="box">
              <div className="box-img">
                <div className="price-circle">$25</div>
              </div>

              <span className="title">Super BBQ Grilled No Smoke</span>
              <p className="details">
                Fried Eggs, Fried Bacon, Steak, Baked Potato, French Fries
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="box-img">
                <div className="price-circle">$25</div>
              </div>

              <span className="title">Super BBQ Grilled No Smoke</span>
              <p className="details">
                Fried Eggs, Fried Bacon, Steak, Baked Potato, French Fries
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="box-img">
                <div className="price-circle">$25</div>
              </div>

              <span className="title">Super BBQ Grilled No Smoke</span>
              <p className="details">
                Fried Eggs, Fried Bacon, Steak, Baked Potato, French Fries
              </p>
            </div>
          </div>
        </div>
        <a className="menu" href="#">
          View full menu
        </a>
      </div>
    </section>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
