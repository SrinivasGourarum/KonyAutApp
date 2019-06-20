function AS_Segment_6a0b82fdcaa34ad6b6b5e80293e69b16() {
    function SHOW_ALERT_onRowClick_92548e2656f34018a08018fa8f90416d_True() {}

    function SHOW_ALERT_onRowClick_92548e2656f34018a08018fa8f90416d_False() {}

    function SHOW_ALERT_onRowClick_92548e2656f34018a08018fa8f90416d_Callback(response) {
        if (response === true) {
            SHOW_ALERT_onRowClick_92548e2656f34018a08018fa8f90416d_True();
        } else {
            SHOW_ALERT_onRowClick_92548e2656f34018a08018fa8f90416d_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Call",
        "yesLabel": "Call",
        "noLabel": "Cancel",
        "message": " 284-123-1234",
        "alertHandler": SHOW_ALERT_onRowClick_92548e2656f34018a08018fa8f90416d_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}