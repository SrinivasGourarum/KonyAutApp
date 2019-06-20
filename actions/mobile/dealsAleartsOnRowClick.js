function dealsAleartsOnRowClick(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_86c0eb2a0b364f76bf5b487a54114bfa(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_86c0eb2a0b364f76bf5b487a54114bfa(eventobject, sectionNumber, rowNumber) {
    var dealsData;
    if (frmDealsAlertKA.AlertsAndroid.selectedRowIndex[1] == 0) {
        dealsData = frmDealsAlertKA.AlertsAndroid.data;
        //alert(frmSecurityAlertsKA.AlertsAndroid.data[1]);
        if (dealsData[0].imgicontick == 'checkbox_off.png') dealsData[0].imgicontick = 'checkbox_on.png';
        else dealsData[0].imgicontick = 'checkbox_off.png';
        frmDealsAlertKA.AlertsAndroid.setData(dealsData);
    } else if (frmDealsAlertKA.AlertsAndroid.selectedRowIndex[1] == 1) {
        dealsData = frmDealsAlertKA.AlertsAndroid.data;
        //alert(frmSecurityAlertsKA.AlertsAndroid.data[1]);
        if (dealsData[1].imgicontick == 'checkbox_off.png') dealsData[1].imgicontick = 'checkbox_on.png';
        else dealsData[1].imgicontick = 'checkbox_off.png';
        frmDealsAlertKA.AlertsAndroid.setData(dealsData);
    }
}