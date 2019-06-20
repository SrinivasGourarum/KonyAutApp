function AS_TextField_09e03debe60c4e10ae76f1cef2fd23a8(eventobject, changedtext) {
    if (kony.os.deviceInfo().name === "thinclient") {
        kony.print("myString");
    } else {
        loginKeyboardInactive();
    }
}