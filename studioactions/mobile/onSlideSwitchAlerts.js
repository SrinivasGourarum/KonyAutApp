function onSlideSwitchAlerts(eventobject) {
    return AS_Switch_3764b64391b44429bd86ff546597d15f(eventobject);
}

function AS_Switch_3764b64391b44429bd86ff546597d15f(eventobject) {
    var segiphoneSettingsData = frmUserSettingsKA.userSettingsSegment.data[1][1][1];
    if (frmAlertsKA.SwitchAlert.selectedIndex === 1) {
        frmAlertsKA.alertsTypes.isVisible = false;
        segiphoneSettingsData.CopyLabel0cc77ebb350664b = "ON";
        //alert(segAndroidSettingsData);
        frmUserSettingsKA.userSettingsSegment.setDataAt(segiphoneSettingsData, 1, 1);
    } else {
        segiphoneSettingsData.CopyLabel0cc77ebb350664b = "ON";
        //alert(segAndroidSettingsData);
        frmUserSettingsKA.userSettingsSegment.setDataAt(segiphoneSettingsData, 1, 1);
        frmAlertsKA.alertsTypes.isVisible = true;
    }
}