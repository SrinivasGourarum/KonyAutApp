function AS_Button_815c646d5e434cf8af7523b551e409c7(eventobject) {
    function SHOW_ALERT__c546b499ce97420caf73cf2f8a46f03f_True() {}

    function SHOW_ALERT__c546b499ce97420caf73cf2f8a46f03f_False() {}

    function SHOW_ALERT__c546b499ce97420caf73cf2f8a46f03f_Callback(response) {
        if (response == true) {
            SHOW_ALERT__c546b499ce97420caf73cf2f8a46f03f_True()
        } else {
            SHOW_ALERT__c546b499ce97420caf73cf2f8a46f03f_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "You are leaving the xyzBank Mobile App",
        "yesLabel": "OK",
        "noLabel": "Cancel",
        "message": "to open directions in Maps.",
        "alertHandler": SHOW_ALERT__c546b499ce97420caf73cf2f8a46f03f_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}