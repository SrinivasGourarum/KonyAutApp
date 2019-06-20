function AS_Button_1c0dc5d74c2b4ccc99e8d35fb1faa7c4(eventobject) {
    function SHOW_ALERT__791a85483d444c0897325f889d6c678e_True() {
        undefined.show();
    }

    function SHOW_ALERT__791a85483d444c0897325f889d6c678e_False() {}

    function SHOW_ALERT__791a85483d444c0897325f889d6c678e_Callback(response) {
        if (response == true) {
            SHOW_ALERT__791a85483d444c0897325f889d6c678e_True()
        } else {
            SHOW_ALERT__791a85483d444c0897325f889d6c678e_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirm Sign Out",
        "yesLabel": "Sign Out",
        "noLabel": "Cancel",
        "message": "Are you sure you want to sign out?",
        "alertHandler": SHOW_ALERT__791a85483d444c0897325f889d6c678e_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}