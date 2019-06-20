function accountAlertsOnrowClick(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_0558f9a518e34bc48a144679898ede4f(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_0558f9a518e34bc48a144679898ede4f(eventobject, sectionNumber, rowNumber) {
    if ((frmAccountAlertsKA.AlertsAndroid.selectedRowIndex[1] == 0)) {
        frmMinimumBalanceAlertKA.show();
    } else if ((frmAccountAlertsKA.AlertsAndroid.selectedRowIndex[1] == 1)) {
        frmBalanceUpdateKA.show();
    } else if ((frmAccountAlertsKA.AlertsAndroid.selectedRowIndex[1] == 2)) {
        frmDebitLimitKA.show();
    } else if ((frmAccountAlertsKA.AlertsAndroid.selectedRowIndex[1] == 3)) {
        frmCreditLimitKA.show();
    } else if ((frmAccountAlertsKA.AlertsAndroid.selectedRowIndex[1] == 4)) {
        frmPaymentDueRemainderKA.show();
    }
}