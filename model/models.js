sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			
			// Disable the scan barcode button by default
			oModel.setProperty("/barcodeScanEnabled",false);
			if(navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
				navigator.mediaDevices.getUserMedia({video:true}).then(function(stream){
					// device supports video, which means will enable the scan button
					oModel.setProperty("/barcodeScanEnabled",true);
				}).catch(function(err){
					// not supported, barcodeScanEnabled already default to false
				});
			}
			
			return oModel;
		}

	};
});