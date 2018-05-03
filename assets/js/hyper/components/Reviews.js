import { h, app } from "hyperapp";

export default function Reviews({ state, actions }) {
  return (
    <section className="reviews">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="side-img">
              <img
                src="http://africaluxurygroup.co.za/wp-content/uploads/2017/02/CHEFLEX-e1423898293993.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 ">
            <h5 className="comp-title">Reviews</h5>
            <h2>The Food Network</h2>
            <h4>"Best Restaurant in the L.A area!"</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              dictum, augue a imperdiet facilisis, magna arcu viverra magna, ac
              mollis mauris felis sed mi. Duis in semper purus. Suspendisse
              malesuada justo sodales ligula hendrerit tincidunt. Aliquam mollis
              augue sed dolor varius laoreet. Cras sagittis est eget elementum
              egestas.
            </p>
            <div className="author">
              <strong>Joe Bastion</strong> - winner of the chef masters
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
