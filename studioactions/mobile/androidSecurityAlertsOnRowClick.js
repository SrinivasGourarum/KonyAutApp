function androidSecurityAlertsOnRowClick(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_cb3ddcb4a46f45fe963673553a683652(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_cb3ddcb4a46f45fe963673553a683652(eventobject, sectionNumber, rowNumber) {
    var securityData;
    if ((frmSecurityAlertsKA.AlertsAndroid.selectedRowIndex[1] == 0)) {
        securityData = frmSecurityAlertsKA.AlertsAndroid.data;
        //alert(frmSecurityAlertsKA.AlertsAndroid.data[1]);
        if (securityData[0].imgicontick == 'checkbox_off.png') securityData[0].imgicontick = 'checkbox_on.png';
        else securityData[0].imgicontick = 'checkbox_off.png';
        frmSecurityAlertsKA.AlertsAndroid.setData(securityData);
    } else if ((frmSecurityAlertsKA.AlertsAndroid.selectedRowIndex[1] == 1)) {
        securityData = frmSecurityAlertsKA.AlertsAndroid.data;
        //alert(frmSecurityAlertsKA.AlertsAndroid.data[1]);
        if (securityData[1].imgicontick == 'checkbox_off.png') securityData[1].imgicontick = 'checkbox_on.png';
        else securityData[1].imgicontick = 'checkbox_off.png';
        frmSecurityAlertsKA.AlertsAndroid.setData(securityData);
    } else if ((frmSecurityAlertsKA.AlertsAndroid.selectedRowIndex[1] == 2)) {
        securityData = frmSecurityAlertsKA.AlertsAndroid.data;
        //alert(frmSecurityAlertsKA.AlertsAndroid.data[1]);
        if (securityData[2].imgicontick == 'checkbox_off.png') securityData[2].imgicontick = 'checkbox_on.png';
        else securityData[2].imgicontick = 'checkbox_off.png';
        frmSecurityAlertsKA.AlertsAndroid.setData(securityData);
    } else if ((frmSecurityAlertsKA.AlertsAndroid.selectedRowIndex[1] == 3)) {
        securityData = frmSecurityAlertsKA.AlertsAndroid.data;
        //alert(frmSecurityAlertsKA.AlertsAndroid.data[1]);
        if (securityData[3].imgicontick == 'checkbox_off.png') securityData[3].imgicontick = 'checkbox_on.png';
        else securityData[3].imgicontick = 'checkbox_off.png';
        frmSecurityAlertsKA.AlertsAndroid.setData(securityData);
    } else if ((frmSecurityAlertsKA.AlertsAndroid.selectedRowIndex[1] == 4)) {
        securityData = frmSecurityAlertsKA.AlertsAndroid.data;
        //alert(frmSecurityAlertsKA.AlertsAndroid.data[1]);
        if (securityData[4].imgicontick == 'checkbox_off.png') securityData[4].imgicontick = 'checkbox_on.png';
        else securityData[4].imgicontick = 'checkbox_off.png';
        frmSecurityAlertsKA.AlertsAndroid.setData(securityData);
    } else if ((frmSecurityAlertsKA.AlertsAndroid.selectedRowIndex[1] == 5)) {
        securityData = frmSecurityAlertsKA.AlertsAndroid.data;
        //alert(frmSecurityAlertsKA.AlertsAndroid.data[1]);
        if (securityData[5].imgicontick == 'checkbox_off.png') securityData[5].imgicontick = 'checkbox_on.png';
        else securityData[5].imgicontick = 'checkbox_off.png';
        frmSecurityAlertsKA.AlertsAndroid.setData(securityData);
    }
}