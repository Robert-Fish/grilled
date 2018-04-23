webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = exports.actions = {
  up: up,
  intro: intro,
  showMenu: showMenu
};

function up(state, actions) {
  return { count: state.count + 1 };
}

function showMenu() {}

function intro(state, actions) {
  console.log('Just ran my first action');
  return { count: state.count + 1 };
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(13);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(17);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(14);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(16);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(15);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "div",
    { "class": "app" },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    "\\",
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var globalState = exports.globalState = {
  count: 0
};

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "logo" },
        "Grilled"
      ),
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Party Platter"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Locations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Rewards"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservation"
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "row" },
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            { className: "comp-title" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "Cooking is the art of adjustment"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis sollicitudin mi. Integer aliquet, nulla ut gravida accumsan, elit dui tempus augue, vel condimentum magna sem sed turpis. Sed eget est varius, commodo augue in, efficitur lacus. Sed pharetra id lacus quis tempor. Suspendisse odio mi, ornare sit amet felis feugiat, rutrum faucibus enim. Praesent commodo ipsum ut sagittis scelerisque."
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "quote" },
            "\"The best steak in town\" - ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Thomas Eggsy"
            )
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", className: "reserve-btn" },
            "Reserve"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-6" },
          (0, _hyperapp.h)("div", { className: "video-img" })
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { className: "RandomQuote" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)("i", { "class": "fas fa-quote-left" }),
      (0, _hyperapp.h)(
        "h1",
        null,
        "\"Cooking is all about people. Food is maybe the only universal thing that really has the power to bring everyone together. No matter what culture, everywhere around the world, people get together to eat.\""
      ),
      (0, _hyperapp.h)(
        "span",
        { className: "author" },
        "- Guy Fieri -"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { className: "SpecialMenu" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "h5",
        { className: "comp-title" },
        "Special Menu"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavour of Autumnn"
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "row boxes" },
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { className: "box" },
            (0, _hyperapp.h)(
              "div",
              { className: "box-img" },
              (0, _hyperapp.h)(
                "div",
                { className: "price-circle" },
                "$25"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { className: "title" },
              "Super BBQ Grilled No Smoke"
            ),
            (0, _hyperapp.h)(
              "p",
              { className: "details" },
              "Fried Eggs, Fried Bacon, Steak, Baked Potato, French Fries"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { className: "box" },
            (0, _hyperapp.h)(
              "div",
              { className: "box-img" },
              (0, _hyperapp.h)(
                "div",
                { className: "price-circle" },
                "$25"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { className: "title" },
              "Super BBQ Grilled No Smoke"
            ),
            (0, _hyperapp.h)(
              "p",
              { className: "details" },
              "Fried Eggs, Fried Bacon, Steak, Baked Potato, French Fries"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { className: "box" },
            (0, _hyperapp.h)(
              "div",
              { className: "box-img" },
              (0, _hyperapp.h)(
                "div",
                { className: "price-circle" },
                "$25"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { className: "title" },
              "Super BBQ Grilled No Smoke"
            ),
            (0, _hyperapp.h)(
              "p",
              { className: "details" },
              "Fried Eggs, Fried Bacon, Steak, Baked Potato, French Fries"
            )
          )
        )
      ),
      (0, _hyperapp.h)(
        "a",
        { className: "menu", href: "#" },
        "View full menu"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { className: "topimg" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "Welcome"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          "Prime Steak ",
          (0, _hyperapp.h)("br", null),
          " Restaurant"
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "contact-info" },
        (0, _hyperapp.h)(
          "div",
          { className: "container" },
          (0, _hyperapp.h)(
            "div",
            { className: "booking" },
            "Book Table Directly"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "(478)-728-295"
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "hours" },
            "Opening Hours ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Mon - Fri:"
            ),
            " 9-9pm"
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _hyperappReduxDevtools = __webpack_require__(12);

var _hyperappReduxDevtools2 = _interopRequireDefault(_hyperappReduxDevtools);

var _actions = __webpack_require__(9);

var _globalState = __webpack_require__(11);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: { globalState: _globalState.globalState },
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {
      actions.intro();
    }
  },
  mixins: [(0, _hyperappReduxDevtools2.default)()]
});

/***/ })
],[18]);