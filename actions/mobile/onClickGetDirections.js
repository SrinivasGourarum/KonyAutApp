function onClickGetDirections(eventobject) {
    return AS_Button_5e27a754b3fd4c3789df8ac62cb55033(eventobject);
}

function AS_Button_5e27a754b3fd4c3789df8ac62cb55033(eventobject) {
    function SHOW_ALERT__fd85d97a1b8248caa402abade4ea54a3_True() {}

    function SHOW_ALERT__fd85d97a1b8248caa402abade4ea54a3_False() {}

    function SHOW_ALERT__fd85d97a1b8248caa402abade4ea54a3_Callback(response) {
        if (response === true) {
            SHOW_ALERT__fd85d97a1b8248caa402abade4ea54a3_True();
        } else {
            SHOW_ALERT__fd85d97a1b8248caa402abade4ea54a3_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "You are leaving the xyzBank Mobile App",
        "yesLabel": "OK",
        "noLabel": "Cancel",
        "message": "to open directions in Maps.",
        "alertHandler": SHOW_ALERT__fd85d97a1b8248caa402abade4ea54a3_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}