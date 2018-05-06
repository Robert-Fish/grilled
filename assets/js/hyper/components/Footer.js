import { h, app } from "hyperapp";

export default function Footer({ state, actions }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo">
          <i className="fas fa-utensils" />
        </div>
        <nav className="menu">
          <a href="#">Reservations</a>
          <a href="#">Functions</a>
          <a href="#">Contact</a>
          <a href="#">Reviews & Media</a>
        </nav>

        <div className="social-media">
          <li>
            <i className="fab fa-facebook-f" />
          </li>
          <li>
            <i className="fab fa-instagram" />
          </li>
          <li>
            <i className="fab fa-twitter" />
          </li>
        </div>

        <div className="copyright">&copy; 2018 Copyright </div>
      </div>
    </footer>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
