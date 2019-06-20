function AS_TextField_22ecef37176442a0a4fb40bc5158582b(eventobject, changedtext) {
    if (kony.os.deviceInfo().name === "thinclient") {
        kony.print("myString");
    } else {
        loginKeyboardInactive();
    }
}