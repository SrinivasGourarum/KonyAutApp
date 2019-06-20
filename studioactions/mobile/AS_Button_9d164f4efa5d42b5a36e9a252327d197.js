function AS_Button_9d164f4efa5d42b5a36e9a252327d197(eventobject) {
    function SHOW_ALERT__1ccc1cdcffe244d4ac3fc88903c673eb_True() {
        frmManageCardsKA.show();
    }

    function SHOW_ALERT__1ccc1cdcffe244d4ac3fc88903c673eb_Callback() {
        SHOW_ALERT__1ccc1cdcffe244d4ac3fc88903c673eb_True()
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": "Confirmation ",
        "yesLabel": "OK",
        "message": "Your card is cancelled\n",
        "alertHandler": SHOW_ALERT__1ccc1cdcffe244d4ac3fc88903c673eb_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}