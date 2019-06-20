function AS_Segment_75c7a6f6d9684307974e6feee495e49a(eventobject, sectionNumber, rowNumber) {
    var selRow = frmAccountInfoKA.contactSegmentList.selectedIndex[1];
    var ph;
    if (selRow == 0) ph = "284-123-1234";
    else ph = "284-123-1233";

    function callback() {}
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Call",
        "yesLabel": "Call",
        "noLabel": "Cancel",
        "alertIcon": "phone_icon_inactive.png",
        "message": ph,
        "alertHandler": callback()
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}