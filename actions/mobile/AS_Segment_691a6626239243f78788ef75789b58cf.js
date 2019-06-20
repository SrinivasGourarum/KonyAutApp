function AS_Segment_691a6626239243f78788ef75789b58cf(eventobject, sectionNumber, rowNumber) {
    var defaultData = frmSetDefaultPageKA.loginSettingsSegmentAndroid.data;
    if (frmSetDefaultPageKA.loginSettingsSegmentAndroid.selectedRowIndex[1] == 0) {
        defaultData[0].imgicontick = 'check_blue.png';
        defaultData[1].imgicontick = '';
        defaultData[2].imgicontick = '';
        defaultData[3].imgicontick = '';
    } else if (frmSetDefaultPageKA.loginSettingsSegmentAndroid.selectedRowIndex[1] == 1) {
        defaultData[0].imgicontick = '';
        defaultData[1].imgicontick = 'check_blue.png';
        defaultData[2].imgicontick = '';
        defaultData[3].imgicontick = '';
    } else if (frmSetDefaultPageKA.loginSettingsSegmentAndroid.selectedRowIndex[1] == 2) {
        defaultData[0].imgicontick = '';
        defaultData[1].imgicontick = '';
        defaultData[2].imgicontick = 'check_blue.png';
        defaultData[3].imgicontick = '';
    } else if (frmSetDefaultPageKA.loginSettingsSegmentAndroid.selectedRowIndex[1] == 3) {
        defaultData[0].imgicontick = '';
        defaultData[1].imgicontick = '';
        defaultData[2].imgicontick = '';
        defaultData[3].imgicontick = 'check_blue.png';
    }
    frmSetDefaultPageKA.loginSettingsSegmentAndroid.setData(defaultData);
}