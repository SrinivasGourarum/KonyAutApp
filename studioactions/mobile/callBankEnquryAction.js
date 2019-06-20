function callBankEnquryAction(eventobject) {
    return AS_FlexContainer_2fe79789657d484b928f2573838fb4cd(eventobject);
}

function AS_FlexContainer_2fe79789657d484b928f2573838fb4cd(eventobject) {
    function SHOW_ALERT__10f9714f844d4cd89102b2c76f14e459_True() {}

    function SHOW_ALERT__10f9714f844d4cd89102b2c76f14e459_False() {}

    function SHOW_ALERT__10f9714f844d4cd89102b2c76f14e459_Callback(response) {
        if (response == true) {
            SHOW_ALERT__10f9714f844d4cd89102b2c76f14e459_True()
        } else {
            SHOW_ALERT__10f9714f844d4cd89102b2c76f14e459_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Call",
        "yesLabel": "Call",
        "noLabel": "Cancel",
        "message": " 284-123-1234",
        "alertHandler": SHOW_ALERT__10f9714f844d4cd89102b2c76f14e459_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}