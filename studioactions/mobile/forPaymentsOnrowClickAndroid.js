function forPaymentsOnrowClickAndroid(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_7d8a1730846840f18b43928c48ba5c3b(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_7d8a1730846840f18b43928c48ba5c3b(eventobject, sectionNumber, rowNumber) {
    var forpaymentsData = frmPreferredAccountsKA.ForPayments.data;
    if (frmPreferredAccountsKA.ForPayments.selectedRowIndex[1] == 0) {
        forpaymentsData[0][1][0].imgicontick = 'check_blue.png';
        forpaymentsData[0][1][1].imgicontick = '';
        frmPreferredAccountsKA.ForPayments.setData(forpaymentsData);
    } else {
        forpaymentsData[0][1][0].imgicontick = '';
        forpaymentsData[0][1][1].imgicontick = 'check_blue.png';
        frmPreferredAccountsKA.ForPayments.setData(forpaymentsData);
    }
}