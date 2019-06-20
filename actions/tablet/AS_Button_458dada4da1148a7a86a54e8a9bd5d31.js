function AS_Button_458dada4da1148a7a86a54e8a9bd5d31(eventobject) {
    function SHOW_ALERT__713e05997ac74854b1262638bcb10a41_True() {
        closeModal("scheduledTransactionWrapper", scheduledTransactionDetails);
        retainSelectionOff("scheduledTransactions");
    }

    function SHOW_ALERT__713e05997ac74854b1262638bcb10a41_False() {}

    function SHOW_ALERT__713e05997ac74854b1262638bcb10a41_Callback(response) {
        if (response === true) {
            SHOW_ALERT__713e05997ac74854b1262638bcb10a41_True();
        } else {
            SHOW_ALERT__713e05997ac74854b1262638bcb10a41_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Delete Scheduled Transaction?",
        "yesLabel": "Yes",
        "noLabel": "Cancel",
        "message": "Are you sure you want to delete this scheduled transaction?",
        "alertHandler": SHOW_ALERT__713e05997ac74854b1262638bcb10a41_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}