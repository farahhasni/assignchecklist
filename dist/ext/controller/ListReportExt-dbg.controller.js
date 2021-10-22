sap.ui.controller("sempra.ehs.semprasimsassignchecklist.ext.controller.ListReportExt", {

	onInit: function () {
		var oView = this.getView();
		var oViewId = oView.getId();
		var oButtonDelete = oView.byId(oViewId + "--deleteEntry");
		oButtonDelete.setVisible(false);
	}
});