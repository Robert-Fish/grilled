import { h, app } from "hyperapp";

export default function ContactUs({ state, actions }) {
  return (
    <section className="ContactUs">
      <div className="container">
        <h5 className="comp-title">Contact Us</h5>
        <h2>Delicious Flavour of Autumnn</h2>

        <div className="box">
          <div className="row">
            <div className="col-md-6">
              <div className="city">Melbourne, Australia</div>
              <h6 className="address">
                25 King Street. <br /> Melbourne, VIC 124
              </h6>
              <p>
                <strong>email: </strong> <a href="#">test@email.com</a>
              </p>
            </div>
            <div className="col-md-6">
              <h6 className="callUs">Call Directly</h6>
              <div className="number">+61 0321 342 233</div>
              <h4>Lunch Service:</h4>
              <div className="trading-hours">
                Friday, Saturday and Sunday. <br />Bookings from 12pm
              </div>
              <h4>Dinner Service:</h4>
              <div className="trading-hours">Daily Bookings from 6pm</div>
            </div>
          </div>
        </div>
        <div />
      </div>
    </section>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
