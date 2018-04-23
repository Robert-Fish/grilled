import { h, app } from "hyperapp";

export default function TopImg({ state, actions }) {
  return (
    <section className="topimg">
      <div className="container">
        <div className="title">
          <h5>Welcome</h5>
          <h1>
            Prime Steak <br /> Restaurant
          </h1>
        </div>

        <div className="contact-info">
          <div className="container">
            <div className="booking">Book Table Directly</div>
            <h2>(478)-728-295</h2>
            <div className="hours">
              Opening Hours <strong>Mon - Fri:</strong> 9-9pm
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
