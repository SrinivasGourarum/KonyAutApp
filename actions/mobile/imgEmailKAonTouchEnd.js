function imgEmailKAonTouchEnd(eventobject, x, y) {
    return AS_Image_c0a8690a9c574544981a10a48d72be40(eventobject, x, y);
}

function AS_Image_c0a8690a9c574544981a10a48d72be40(eventobject, x, y) {
    if (frmP2PaddnewPayeeKA.imgEmailKA.src == "radiononselected.png") {
        frmP2PaddnewPayeeKA.imgEmailKA.src = "radioselected.png";
        frmP2PaddnewPayeeKA.imgPhoneKA.src = "radiononselected.png";
        frmP2PaddnewPayeeKA.tbxPhoneKA.setFocus(true);
        frmP2PaddnewPayeeKA.tbxEmailKA.setFocus(false);
    } else {
        frmP2PaddnewPayeeKA.imgPhoneKA.src = "radioselected.png"
        frmP2PaddnewPayeeKA.imgEmailKA.src = "radiononselected.png";
        frmP2PaddnewPayeeKA.tbxPhoneKA.setFocus(false);
        frmP2PaddnewPayeeKA.tbxEmailKA.setFocus(true);
    }
}