function AS_Button_e15ae798c37d4ae1924f4d072f1e3c14(eventobject) {
    function SHOW_ALERT_onClick_5f9c03e58b754febb08b87cc73480c98_True() {
        transactionSuccess(frmNewPayPersonKA);
    }

    function SHOW_ALERT_onClick_5f9c03e58b754febb08b87cc73480c98_False() {}

    function SHOW_ALERT_onClick_5f9c03e58b754febb08b87cc73480c98_Callback(response) {
        if (response == true) {
            SHOW_ALERT_onClick_5f9c03e58b754febb08b87cc73480c98_True()
        } else {
            SHOW_ALERT_onClick_5f9c03e58b754febb08b87cc73480c98_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirm Payment",
        "yesLabel": "Pay",
        "noLabel": "Cancel",
        "message": "Pay $5 to John Smith?",
        "alertHandler": SHOW_ALERT_onClick_5f9c03e58b754febb08b87cc73480c98_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}