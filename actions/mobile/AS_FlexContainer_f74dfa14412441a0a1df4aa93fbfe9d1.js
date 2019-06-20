function AS_FlexContainer_f74dfa14412441a0a1df4aa93fbfe9d1(eventobject) {
    function SHOW_ALERT__04ec0cd12ae54724a859ae4e25566adf_True() {
        frmLoginKA.show();
    }

    function SHOW_ALERT__04ec0cd12ae54724a859ae4e25566adf_False() {}

    function SHOW_ALERT__04ec0cd12ae54724a859ae4e25566adf_Callback(response) {
        if (response === true) {
            SHOW_ALERT__04ec0cd12ae54724a859ae4e25566adf_True();
        } else {
            SHOW_ALERT__04ec0cd12ae54724a859ae4e25566adf_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirm Sign Out",
        "yesLabel": "Sign Out",
        "noLabel": "Cancel",
        "message": "Are you sure you want to sign out?",
        "alertHandler": SHOW_ALERT__04ec0cd12ae54724a859ae4e25566adf_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}