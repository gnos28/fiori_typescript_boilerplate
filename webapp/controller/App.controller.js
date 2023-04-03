sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  (Controller, MessageToast, JSONModel, ResourceModel) => {
    "use strict";
    return Controller.extend("Quickstart.App", {
      onInit: function () {
        // set the datamodel on the view
        const oData = {
          recipient: {
            name: "Tom",
          },
        };
        const oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
        // set i18n model on view
        const i18nModel = new ResourceModel({
          bundleName: "Quickstart.i18n.i18n",
          supportedLocales: [""],
          fallbackLocale: "",
        });

        this.getView().setModel(i18nModel, "i18n");
      },

      onShowHello: function () {
        // read message from i18n model
        const oBundle = this.getView().getModel("i18n").getResourceBundle();
        const sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        const sMsg = oBundle.getText("helloMsg", [sRecipient]);

        // show a native or vanilla JS alert
        MessageToast.show("Hello there xD " + sMsg);
      },
    });
  }
);
