(this["webpackJsonpreact-context-video-demo"] =
  this["webpackJsonpreact-context-video-demo"] || []).push([
  [0],
  {
    12: function (e, t, n) {},
    13: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        o = n.n(a),
        r = n(6),
        c = n.n(r),
        l = (n(12), n(1)),
        u = n(2),
        i = n(4),
        s = n(3),
        p = Object(a.createContext)(),
        d = (function (e) {
          Object(i.a)(n, e);
          var t = Object(s.a)(n);
          function n(e) {
            var a;
            return (
              Object(l.a)(this, n),
              ((a = t.call(this, e)).updateSelection = function (e) {
                a.setState({ color: e.target.value });
              }),
              (a.handleSubmit = function (e) {
                e.preventDefault(), a.context.updateColor(a.state.color);
              }),
              (a.state = { color: "" }),
              a
            );
          }
          return (
            Object(u.a)(n, [
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    "form",
                    { onSubmit: this.handleSubmit },
                    o.a.createElement("input", {
                      type: "text",
                      onChange: this.updateSelection,
                      value: this.state.color,
                      placeholder: "Type a color!",
                    }),
                    o.a.createElement(
                      "button",
                      { type: "submit" },
                      "Change Color"
                    )
                  );
                },
              },
            ]),
            n
          );
        })(o.a.Component);
      d.contextType = p;
      var m = d,
        h = function () {
          return o.a.createElement(
            "div",
            { id: "home" },
            o.a.createElement(m, null)
          );
        },
        b = (function (e) {
          Object(i.a)(n, e);
          var t = Object(s.a)(n);
          function n() {
            return Object(l.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(u.a)(n, [
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    "div",
                    {
                      id: "app",
                      style: { backgroundColor: "".concat(this.context.color) },
                    },
                    o.a.createElement(h, null)
                  );
                },
              },
            ]),
            n
          );
        })(o.a.Component);
      b.contextType = p;
      var v = b,
        f = (function (e) {
          Object(i.a)(n, e);
          var t = Object(s.a)(n);
          function n() {
            var e;
            return (
              Object(l.a)(this, n),
              ((e = t.call(this)).updateColor = function (t) {
                e.setState({ color: t });
              }),
              (e.state = { color: "white", updateColor: e.updateColor }),
              e
            );
          }
          return (
            Object(u.a)(n, [
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    p.Provider,
                    { value: this.state },
                    this.props.children
                  );
                },
              },
            ]),
            n
          );
        })(o.a.Component);
      c.a.render(
        o.a.createElement(
          o.a.StrictMode,
          null,
          o.a.createElement(f, null, o.a.createElement(v, null))
        ),
        document.getElementById("root")
      );
    },
    7: function (e, t, n) {
      e.exports = n(13);
    },
  },
  [[7, 1, 2]],
]);
//# sourceMappingURL=main.ed98271e.chunk.js.map
