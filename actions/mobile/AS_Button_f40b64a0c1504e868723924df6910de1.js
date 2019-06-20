function AS_Button_f40b64a0c1504e868723924df6910de1(eventobject) {
    function SHOW_ALERT__b23e29f6ec1b465d8076198353e40539_True() {
        frmManageCardsKA.show();
    }

    function SHOW_ALERT__b23e29f6ec1b465d8076198353e40539_Callback() {
        SHOW_ALERT__b23e29f6ec1b465d8076198353e40539_True();
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": "Confirmation",
        "yesLabel": "OK",
        "message": "Card is deactivated",
        "alertHandler": SHOW_ALERT__b23e29f6ec1b465d8076198353e40539_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}