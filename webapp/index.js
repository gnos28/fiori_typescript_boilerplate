sap.ui.define(["sap/ui/core/mvc/XMLView"], (XMLView) => {
  "use strict";

  XMLView.create({
    viewName: "Quickstart.view.App",
  }).then((oView) => {
    oView.placeAt("content");
  });
});

// sap.ui.define(["sap/m/Text"], (Text) => {
//   "use strict";
//   new Text({
//     text: "Hello UI5 !",
//   }).placeAt("content");
// });
