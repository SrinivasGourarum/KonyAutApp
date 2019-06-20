function AS_Segment_4ac000096983417f9db9dd3146ecc058() {
    function SHOW_ALERT__c8afc2a826a34a91baf4ced75a081629_True() {}

    function SHOW_ALERT__c8afc2a826a34a91baf4ced75a081629_False() {}

    function SHOW_ALERT__c8afc2a826a34a91baf4ced75a081629_Callback(response) {
        if (response == true) {
            SHOW_ALERT__c8afc2a826a34a91baf4ced75a081629_True()
        } else {
            SHOW_ALERT__c8afc2a826a34a91baf4ced75a081629_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Call",
        "yesLabel": "Call",
        "noLabel": "Cancel",
        "message": " 284-123-1234",
        "alertHandler": SHOW_ALERT__c8afc2a826a34a91baf4ced75a081629_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}