function accountsAlertsOnClick(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_5041502381554331b1dc89212f1e3d1b(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_5041502381554331b1dc89212f1e3d1b(eventobject, sectionNumber, rowNumber) {
    if (frmAlertsKA.AlertsData.selectedRowIndex[1] === 0) {
        if (kony.os.userAgent() == "iPhone") frmAccountAlertsKA.account.text = "Savings 2354";
        else frmAccountAlertsKA.accountandro.text = "Savings 2354";
        frmAccountAlertsKA.show();
    } else {
        if (kony.os.userAgent() == "iPhone") frmAccountAlertsKA.account.text = "Checking 6478";
        else frmAccountAlertsKA.accountandro.text = "Checking 6478";
        frmAccountAlertsKA.show();
    }
}