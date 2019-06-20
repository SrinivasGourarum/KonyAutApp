function AS_Segment_fc32d3afb11a4d77a75fe13dfe4c9493() {
    function SHOW_ALERT__4202f06e7599413eac5c817fbb8614ef_True() {}

    function SHOW_ALERT__4202f06e7599413eac5c817fbb8614ef_False() {}

    function SHOW_ALERT__4202f06e7599413eac5c817fbb8614ef_Callback(response) {
        if (response == true) {
            SHOW_ALERT__4202f06e7599413eac5c817fbb8614ef_True()
        } else {
            SHOW_ALERT__4202f06e7599413eac5c817fbb8614ef_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Call",
        "yesLabel": "Call",
        "noLabel": "Cancel",
        "message": " 284-123-1234",
        "alertHandler": SHOW_ALERT__4202f06e7599413eac5c817fbb8614ef_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}