sap.ui.define([
    "sap/ui/core/mvc/Controller"
    , "../model/formatter","sap/base/Log"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, formatter,Log) {
        "use strict";

        return Controller.extend("demoroutingid.demorouting.controller.View1", {
            formatter: formatter,
            onInit: function () {
                var path = jQuery.sap.getModulePath("demoroutingid.demorouting", "/model/Employe details.json")
                var oModel = new sap.ui.model.json.JSONModel(path);
                this.getView().setModel(oModel, "Data1");

            }
            ,
            onRowClick: function (evt) {
                var key = evt.oSource.mProperties.text;
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("View2", { KeyID: key });

            },
            // onListPress: function(evt){
            //     var key = evt.oSource.mProperties.title;
            //     var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
            //     loRouter.navTo("View2", { KeyID: key });

            // },
            onPressMasterBack: function () {
                var that =this;
                that.getSplitContObj().backMaster();
            },
    
            onListPress: function () {
                var that =this;
                that.getSplitContObj().toMaster(this.createId("master2"));
            },
            onPressDetailBack: function () {
                this.getSplitContObj().backDetail();
            },
            onListItemPress: function (oEvent) {
                var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();
    
                this.getSplitContObj().toDetail(this.createId(sToPageId));
            },
            getSplitContObj: function () {
                var result = this.byId("SplitContDemo");
                if (!result) {
                    Log.error("SplitApp object can't be found");
                }
                return result;
            },


            colorState: function (oEvent1) {
                switch (oEvent1) {

                    case "26":
                        return 1;
                    case "25":
                        return 3;
                    case "24":
                        return 5;
                    case "23":
                        return 7;
                    default:

                        return 8;
                }
            },

            colorsState: function (fValue) {
                try {
                   // fValue = parseFloat(fValue);
                    if (fValue < 0) {
                        return "None";
                    } else if (fValue > 15000) {
                        return "Success";
                    } else if (fValue < 12000) {
                        return "Warning";
                    }
                    else if (fValue <= 13000) {
                        return "Error";
                    } else {
                        return "Pending";
                    }
                } catch (err) {
                    return "None";
                }
            }
            
        });
    });