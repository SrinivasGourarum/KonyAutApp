function onclicksubmitforgotpwd(eventobject) {
    return AS_Button_1922d50e915240f5ae9c944bdf451b1e(eventobject);
}

function AS_Button_1922d50e915240f5ae9c944bdf451b1e(eventobject) {
    function SHOW_ALERT__3b051a42d15a4423a8f6dafdbcbb4be3_True() {}

    function SHOW_ALERT__3b051a42d15a4423a8f6dafdbcbb4be3_Callback() {
        SHOW_ALERT__3b051a42d15a4423a8f6dafdbcbb4be3_True();
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": "",
        "message": "A link with options to reset your password has been sent to your registered email address. Please check and reset your password.",
        "alertHandler": SHOW_ALERT__3b051a42d15a4423a8f6dafdbcbb4be3_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
    frmLoginKA.show();
}