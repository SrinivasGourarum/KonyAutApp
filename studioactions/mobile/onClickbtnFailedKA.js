function onClickbtnFailedKA(eventobject) {
    return AS_Button_b5296a4b03d849878f50c71ab20ff521(eventobject);
}

function AS_Button_b5296a4b03d849878f50c71ab20ff521(eventobject) {
    frmPayeeTransactionsKA.flxTransactionListsContainerKA.animate(kony.ui.createAnimation({
        100: {
            "left": '-200%',
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
            "left": '66.66%',
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
    frmPayeeTransactionsKA.btnScheduledKA.skin = skntabDeselected;
    frmPayeeTransactionsKA.btnCompletedKA.skin = skntabDeselected;
    frmPayeeTransactionsKA.btnFailedKA.skin = skntabSelected;
}