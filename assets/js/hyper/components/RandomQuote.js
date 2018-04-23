import { h, app } from "hyperapp";

export default function RandomQuote({ state, actions }) {
  return (
    <section className="RandomQuote">
      <div className="container">
        <i class="fas fa-quote-left" />
        <h1>
          "Cooking is all about people. Food is maybe the only universal thing
          that really has the power to bring everyone together. No matter what
          culture, everywhere around the world, people get together to eat."
        </h1>
        <span className="author">- Guy Fieri -</span>
      </div>
    </section>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
