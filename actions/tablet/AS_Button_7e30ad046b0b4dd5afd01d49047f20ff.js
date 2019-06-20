function AS_Button_7e30ad046b0b4dd5afd01d49047f20ff(eventobject) {
    function SHOW_ALERT_onClick_5df5b131e2ad4a55887ed55d367b64a4_True() {
        transactionSuccess(newPayPerson);
    }

    function SHOW_ALERT_onClick_5df5b131e2ad4a55887ed55d367b64a4_False() {}

    function SHOW_ALERT_onClick_5df5b131e2ad4a55887ed55d367b64a4_Callback(response) {
        if (response === true) {
            SHOW_ALERT_onClick_5df5b131e2ad4a55887ed55d367b64a4_True();
        } else {
            SHOW_ALERT_onClick_5df5b131e2ad4a55887ed55d367b64a4_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirm Payment",
        "yesLabel": "Pay",
        "noLabel": "Cancel",
        "message": "Pay $5 to John Smith?",
        "alertHandler": SHOW_ALERT_onClick_5df5b131e2ad4a55887ed55d367b64a4_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}