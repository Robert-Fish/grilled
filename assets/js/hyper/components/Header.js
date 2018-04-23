import { h, app } from "hyperapp";

export default function Header({ state, actions }) {
  return (
    <header>
      <div className="container">
        <div className="logo">Grilled</div>
        <nav>
          <a href="#">Menu</a>
          <a href="#">Party Platter</a>
          <a href="#">Locations</a>
          <a href="#">Rewards</a>
          <a href="#">Reservation</a>
        </nav>
      </div>
    </header>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
