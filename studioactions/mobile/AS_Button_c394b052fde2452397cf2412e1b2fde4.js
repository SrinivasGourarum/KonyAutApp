function AS_Button_c394b052fde2452397cf2412e1b2fde4() {
    function SHOW_ALERT_onClick_897168dbe0b3409eb3b8cb6769579193_True() {
        frmLoginKA.show();
    }

    function SHOW_ALERT_onClick_897168dbe0b3409eb3b8cb6769579193_False() {}

    function SHOW_ALERT_onClick_897168dbe0b3409eb3b8cb6769579193_Callback(response) {
        if (response == true) {
            SHOW_ALERT_onClick_897168dbe0b3409eb3b8cb6769579193_True()
        } else {
            SHOW_ALERT_onClick_897168dbe0b3409eb3b8cb6769579193_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirm Sign Out",
        "yesLabel": "Sign Out",
        "noLabel": "Cancel",
        "message": "yes",
        "alertHandler": SHOW_ALERT_onClick_897168dbe0b3409eb3b8cb6769579193_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}