function imgPhoneKAonTouchEnd(eventobject, x, y) {
    return AS_Image_58e57997bf6a4f8a922ceb4c368f5938(eventobject, x, y);
}

function AS_Image_58e57997bf6a4f8a922ceb4c368f5938(eventobject, x, y) {
    if (frmP2PaddnewPayeeKA.imgPhoneKA.src == "radiononselected.png") {
        frmP2PaddnewPayeeKA.imgPhoneKA.src = "radioselected.png";
        frmP2PaddnewPayeeKA.imgEmailKA.src = "radiononselected.png";
        frmP2PaddnewPayeeKA.tbxPhoneKA.setFocus(true);
        frmP2PaddnewPayeeKA.tbxEmailKA.setFocus(false);
    } else {
        frmP2PaddnewPayeeKA.imgPhoneKA.src = "radiononselected.png"
        frmP2PaddnewPayeeKA.imgEmailKA.src = "radioselected.png";
        frmP2PaddnewPayeeKA.tbxPhoneKA.setFocus(false);
        frmP2PaddnewPayeeKA.tbxEmailKA.setFocus(true);
    }
}