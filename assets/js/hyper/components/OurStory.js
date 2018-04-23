import { h, app } from "hyperapp";

export default function OurStory({ state, actions }) {
  return (
    <section id="OurStory">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5 className="comp-title">Our Story</h5>
            <h2>Cooking is the art of adjustment</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              quis sollicitudin mi. Integer aliquet, nulla ut gravida accumsan,
              elit dui tempus augue, vel condimentum magna sem sed turpis. Sed
              eget est varius, commodo augue in, efficitur lacus. Sed pharetra
              id lacus quis tempor. Suspendisse odio mi, ornare sit amet felis
              feugiat, rutrum faucibus enim. Praesent commodo ipsum ut sagittis
              scelerisque.
            </p>
            <div className="quote">
              "The best steak in town" - <strong>Thomas Eggsy</strong>
            </div>
            <a href="#" className="reserve-btn">
              Reserve
            </a>
          </div>
          <div className="col-md-6">
            <div className="video-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
