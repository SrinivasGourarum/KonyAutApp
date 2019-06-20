function cancelDepositClick(eventobject) {
    return AS_Button_321dd57cd151401ea55f21e5eacaf271(eventobject);
}

function AS_Button_321dd57cd151401ea55f21e5eacaf271(eventobject) {
    function SHOW_ALERT__251664c28a244750baad5606afe5f6ae_True() {
        frmDepositPayLandingKA.show();
    }

    function SHOW_ALERT__251664c28a244750baad5606afe5f6ae_False() {}

    function SHOW_ALERT__251664c28a244750baad5606afe5f6ae_Callback(response) {
        if (response === true) {
            SHOW_ALERT__251664c28a244750baad5606afe5f6ae_True();
        } else {
            SHOW_ALERT__251664c28a244750baad5606afe5f6ae_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Cancel Deposit?",
        "yesLabel": "Yes",
        "noLabel": "No",
        "message": "Are you sure you want cancel this deposit?",
        "alertHandler": SHOW_ALERT__251664c28a244750baad5606afe5f6ae_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}