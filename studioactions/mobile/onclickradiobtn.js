function onclickradiobtn(eventobject) {
    return AS_RadioButtonGroup_c9ebe7999a824b5d99d802d0ce5c9115(eventobject);
}

function AS_RadioButtonGroup_c9ebe7999a824b5d99d802d0ce5c9115(eventobject) {
    if (frmchequeimages.imgradiobtn.selectedKey == "front") {
        frmchequeimages.imagecheque.src = "check_front.png";
    } else {
        frmchequeimages.imagecheque.src = "check_back.png";
    }
}