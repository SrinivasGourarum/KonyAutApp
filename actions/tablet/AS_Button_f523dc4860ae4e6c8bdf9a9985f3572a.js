function AS_Button_f523dc4860ae4e6c8bdf9a9985f3572a(eventobject) {
    function SHOW_ALERT_ide_onClick_f143f057fcc94ee6872d1faa39305cfd_True() {
        frmUnauthFeatureEnablingKA.show();
    }

    function SHOW_ALERT_ide_onClick_f143f057fcc94ee6872d1faa39305cfd_Callback() {
        SHOW_ALERT_ide_onClick_f143f057fcc94ee6872d1faa39305cfd_True();
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": "Touch ID for xyzBank",
        "yesLabel": "Cancel",
        "noLabel": null,
        "alertIcon": "touch_id_icon.png",
        "message": "Sign on with Touch ID or enter username and password.",
        "alertHandler": SHOW_ALERT_ide_onClick_f143f057fcc94ee6872d1faa39305cfd_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}