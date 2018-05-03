import { h, app } from "hyperapp";
import Header from "./Header";
import TopImg from "./TopImg";
import OurStory from "./OurStory.js";
import SpecialMenu from "./SpecialMenu";
import RandomQuote from "./RandomQuote";
import ContactUs from "./ContactUs";
import Reviews from "./Reviews";
import Footer from "./Footer";
export default function App({ state, actions }) {
  return (
    <div class={"app"}>
      <Header state={state} actions={actions} />
      <TopImg state={state} actions={actions} />
      <OurStory state={state} actions={actions} />\
      <SpecialMenu state={state} actions={actions} />
      <RandomQuote state={state} actions={actions} />
      <Reviews state={state} actions={actions} />
      <ContactUs state={state} actions={actions} />
      <Footer state={state} actions={actions} />
    </div>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
