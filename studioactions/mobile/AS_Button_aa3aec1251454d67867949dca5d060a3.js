function AS_Button_aa3aec1251454d67867949dca5d060a3(eventobject) {
    function SHOW_ALERT__698be8d686384bebac743c2cb793571f_True() {
        frmLoginKA.show();
    }

    function SHOW_ALERT__698be8d686384bebac743c2cb793571f_False() {}

    function SHOW_ALERT__698be8d686384bebac743c2cb793571f_Callback(response) {
        if (response == true) {
            SHOW_ALERT__698be8d686384bebac743c2cb793571f_True()
        } else {
            SHOW_ALERT__698be8d686384bebac743c2cb793571f_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirm Sign Out",
        "yesLabel": "Sign Out",
        "noLabel": "Cancel",
        "message": "Are you sure you want to sign out?",
        "alertHandler": SHOW_ALERT__698be8d686384bebac743c2cb793571f_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}