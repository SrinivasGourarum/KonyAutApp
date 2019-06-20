function AS_Segment_43efac0002794e8f885bb95efa307721(eventobject, sectionNumber, rowNumber) {
    var selRow = frmSetDefaultPageKA.loginSettingsSegmentAndroid.selectedRowIndex[1];
    var segData = frmSetDefaultPageKA.loginSettingsSegmentAndroid.data;
    switch (selRow) {
        case 0:
            segData[0].imgChevronKA = "check_blue.png";
            segData[1].imgChevronKA = "";
            segData[2].imgChevronKA = "";
            segData[3].imgChevronKA = "";
            break;
        case 1:
            segData[0].imgChevronKA = "";
            segData[1].imgChevronKA = "check_blue.png";
            segData[2].imgChevronKA = "";
            segData[3].imgChevronKA = "";
            break;
        case 2:
            segData[0].imgChevronKA = "";
            segData[1].imgChevronKA = "";
            segData[2].imgChevronKA = "check_blue.png";
            segData[3].imgChevronKA = "";
            break;
        case 3:
            segData[0].imgChevronKA = "";
            segData[1].imgChevronKA = "";
            segData[2].imgChevronKA = "";
            segData[3].imgChevronKA = "check_blue.png";
            break;
    }
    frmSetDefaultPageKA.loginSettingsSegmentAndroid.setData(segData);
}