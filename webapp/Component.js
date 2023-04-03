sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
  /**
   * @namespace ui5.typescript.helloworld
   */
  const Component = UIComponent.extend("ui5.typescript.helloworld.Component", {
    multiply: function _multiply(x, y) {
      return x * y;
    }
  });
  return Component;
});