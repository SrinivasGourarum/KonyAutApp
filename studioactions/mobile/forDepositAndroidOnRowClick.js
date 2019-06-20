function forDepositAndroidOnRowClick(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_04b2f7deeec2415d9d660434608bd03b(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_04b2f7deeec2415d9d660434608bd03b(eventobject, sectionNumber, rowNumber) {
    var fordepositsData = frmPreferredAccountsKA.ForDeposits.data;
    if (frmPreferredAccountsKA.ForDeposits.selectedRowIndex[1] == 0) {
        fordepositsData[0][1][0].imgicontick = 'check_blue.png';
        fordepositsData[0][1][1].imgicontick = '';
        frmPreferredAccountsKA.ForDeposits.setData(fordepositsData);
    } else {
        fordepositsData[0][1][0].imgicontick = '';
        fordepositsData[0][1][1].imgicontick = 'check_blue.png';
        frmPreferredAccountsKA.ForDeposits.setData(fordepositsData);
    }
}