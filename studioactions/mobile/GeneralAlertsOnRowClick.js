function GeneralAlertsOnRowClick(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_35614b8c54b144e9bb127a26c7b1bcec(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_35614b8c54b144e9bb127a26c7b1bcec(eventobject, sectionNumber, rowNumber) {
    if ((frmAlertsKA.generalAlerts.selectedRowIndex[1] === 0)) {
        frmSecurityAlertsKA.show();
    } else {
        frmDealsAlertKA.show();
    }
}