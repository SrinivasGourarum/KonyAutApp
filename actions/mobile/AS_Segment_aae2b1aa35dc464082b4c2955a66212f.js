function AS_Segment_aae2b1aa35dc464082b4c2955a66212f(eventobject, sectionNumber, rowNumber) {
    var phNum = frmContactUsKA.contactSegmentList.selectedItems[0].phoneNum;

    function callback() {
        if (phNum === 'Facetime') {
            //#ifdef iphone
            kony.application.openURL("facetime://" + "+6596193555");
            //#endif
            //#ifdef android
            kony.print("do nthg")
                //#endif
        }
        if (phNum === 'Skype') {
            kony.application.openURL("skype://echo123?call");
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Call",
        "yesLabel": "Call",
        "noLabel": "Cancel",
        "alertIcon": "phone_icon_inactive.png",
        "message": phNum,
        "alertHandler": callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}