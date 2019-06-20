function ActionImgFlxOnclick(eventobject) {
    return AS_FlexContainer_72ce46efe78749e09207a1944491db95(eventobject);
}

function AS_FlexContainer_72ce46efe78749e09207a1944491db95(eventobject) {
    var segAndroidSettingsData = frmUserSettingsKA.userSettingsSegmentAndroid.data[1][1][1];
    if (frmAlertsKA.infoImg.src == "checkbox_off.png") {
        frmAlertsKA.infoImg.src = "checkbox_on.png";
        frmAlertsKA.alertsTypes.isVisible = true;
        segAndroidSettingsData.CopyLabel0cc77ebb350664b = "ON";
        // alert(segAndroidSettingsData);
        frmUserSettingsKA.userSettingsSegmentAndroid.setDataAt(segAndroidSettingsData, 1, 1);
        //alert(frmUserSettingsKA.userSettingsSegmentAndroid.data);
        //[1][1].CopyLabel0cc77ebb350664b.text="ON";
    } else {
        frmAlertsKA.infoImg.src = "checkbox_off.png";
        frmAlertsKA.alertsTypes.isVisible = false;
        segAndroidSettingsData.CopyLabel0cc77ebb350664b = "OFF";
        frmUserSettingsKA.userSettingsSegmentAndroid.setDataAt(segAndroidSettingsData, 1, 1);
        // frmUserSettingsKA.userSettingsSegmentAndroid[1][1].CopyLabel0cc77ebb350664b.text="OFF"
    }
}