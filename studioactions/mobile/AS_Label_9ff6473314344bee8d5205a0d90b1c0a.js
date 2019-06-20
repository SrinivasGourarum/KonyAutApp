function AS_Label_9ff6473314344bee8d5205a0d90b1c0a() {
    function MOVE_ACTION____e72c6a7163b5478492a1a33ae03ee005_Callback() {}

    function MOVE_ACTION____4efcfbcfb3dd44b3b71de21bfa80c992_Callback() {}
    undefined.animate(kony.ui.createAnimation({
        "100": {
            "left": "-320dp",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____4efcfbcfb3dd44b3b71de21bfa80c992_Callback
    });
    undefined.animate(kony.ui.createAnimation({
        "100": {
            "left": "0dp",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____e72c6a7163b5478492a1a33ae03ee005_Callback
    });
}