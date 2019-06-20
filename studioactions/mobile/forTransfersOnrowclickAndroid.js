function forTransfersOnrowclickAndroid(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_971b946f471b45a5b6118b9465ab254a(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_971b946f471b45a5b6118b9465ab254a(eventobject, sectionNumber, rowNumber) {
    var forTransfersData = frmPreferredAccountsKA.ForTransfers.data;
    //alert(forTransfersData);
    if (frmPreferredAccountsKA.ForTransfers.selectedRowIndex[1] == 0) {
        forTransfersData[0][1][0].imgicontick = 'check_blue.png';
        forTransfersData[0][1][1].imgicontick = '';
        frmPreferredAccountsKA.ForTransfers.setData(forTransfersData);
    } else {
        forTransfersData[0][1][0].imgicontick = '';
        forTransfersData[0][1][1].imgicontick = 'check_blue.png';
        frmPreferredAccountsKA.ForTransfers.setData(forTransfersData);
    }
}