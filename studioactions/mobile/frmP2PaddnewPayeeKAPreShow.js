function frmP2PaddnewPayeeKAPreShow(eventobject) {
    return AS_Form_2be2f151d3d9413099e7f6b8e3fd71dc(eventobject);
}

function AS_Form_2be2f151d3d9413099e7f6b8e3fd71dc(eventobject) {
    frmP2PaddnewPayeeKA.imgPhoneKA.src = "radioselected.png";
    frmP2PaddnewPayeeKA.imgEmailKA.src = "radiononselected.png";
    frmP2PaddnewPayeeKA.tbxPhoneKA.setFocus(true);
    frmP2PaddnewPayeeKA.tbxEmailKA.setFocus(false);
}