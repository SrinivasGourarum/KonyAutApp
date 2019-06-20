function AS_Button_a4730c0639d948828413c642147b47e3() {
    function SHOW_ALERT_onClick_81e9a01ff83c485b81b45e7affa76057_True() {
        frmLoginKA.show();
    }

    function SHOW_ALERT_onClick_81e9a01ff83c485b81b45e7affa76057_False() {}

    function SHOW_ALERT_onClick_81e9a01ff83c485b81b45e7affa76057_Callback(response) {
        if (response == true) {
            SHOW_ALERT_onClick_81e9a01ff83c485b81b45e7affa76057_True()
        } else {
            SHOW_ALERT_onClick_81e9a01ff83c485b81b45e7affa76057_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirm Payment",
        "yesLabel": "Pay",
        "noLabel": "Cancel",
        "message": "Pay $5 to John Smith?",
        "alertHandler": SHOW_ALERT_onClick_81e9a01ff83c485b81b45e7affa76057_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}