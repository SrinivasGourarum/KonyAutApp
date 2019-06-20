function AS_Button_333c7a4479e84be48586eecbadf564c8() {
    function SHOW_ALERT_onClick_cbfa7dcd1e7546a1ab01ce131896b17a_True() {
        frmLoginKA.show();
    }

    function SHOW_ALERT_onClick_cbfa7dcd1e7546a1ab01ce131896b17a_False() {}

    function SHOW_ALERT_onClick_cbfa7dcd1e7546a1ab01ce131896b17a_Callback(response) {
        if (response === true) {
            SHOW_ALERT_onClick_cbfa7dcd1e7546a1ab01ce131896b17a_True();
        } else {
            SHOW_ALERT_onClick_cbfa7dcd1e7546a1ab01ce131896b17a_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirm Payment",
        "yesLabel": "Pay",
        "noLabel": "Cancel",
        "message": "Pay $5 to John Smith?",
        "alertHandler": SHOW_ALERT_onClick_cbfa7dcd1e7546a1ab01ce131896b17a_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}