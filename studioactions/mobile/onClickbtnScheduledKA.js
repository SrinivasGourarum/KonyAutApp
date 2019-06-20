function onClickbtnScheduledKA(eventobject) {
    return AS_Button_4283e06a33e44f8181fb2dbd73d4c4ce(eventobject);
}

function AS_Button_4283e06a33e44f8181fb2dbd73d4c4ce(eventobject) {
    frmPayeeTransactionsKA.flxTransactionListsContainerKA.animate(kony.ui.createAnimation({
        100: {
            "left": '-100%',
            "stepConfig": {
                "timingFunction": easeOut
            }
        }
    }), {
        fillMode: forwards,
        duration: 0.3
    }, {
        animationEnd: function() {}
    });
    frmPayeeTransactionsKA.flxSelectedIndicatorKA.animate(kony.ui.createAnimation({
        100: {
            "left": '33.33%',
            "stepConfig": {
                "timingFunction": easeOut
            }
        }
    }), {
        fillMode: forwards,
        duration: 0.3
    }, {
        animationEnd: function() {}
    });
    frmPayeeTransactionsKA.btnScheduledKA.skin = skntabSelected;
    frmPayeeTransactionsKA.btnCompletedKA.skin = skntabDeselected;
    frmPayeeTransactionsKA.btnFailedKA.skin = skntabDeselected;
}