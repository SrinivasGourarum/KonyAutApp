function onclickdeletescheduletrans(eventobject) {
    return AS_Button_69cc80fbba6b400381274c756cb1845b(eventobject);
}

function AS_Button_69cc80fbba6b400381274c756cb1845b(eventobject) {
    function SHOW_ALERT__530e56139ab24ef486fa7446beda6400_True() {
        frmAccountDetailKAOld.show();
    }

    function SHOW_ALERT__530e56139ab24ef486fa7446beda6400_False() {}

    function SHOW_ALERT__530e56139ab24ef486fa7446beda6400_Callback(response) {
        if (response === true) {
            SHOW_ALERT__530e56139ab24ef486fa7446beda6400_True();
        } else {
            SHOW_ALERT__530e56139ab24ef486fa7446beda6400_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Delete Scheduled Transaction",
        "yesLabel": "Yes",
        "noLabel": "Cancel",
        "message": "Are you sure want to delete this transaction?",
        "alertHandler": SHOW_ALERT__530e56139ab24ef486fa7446beda6400_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}