function onClickbtnCompletedKA(eventobject) {
    return AS_Button_8ed47e6bbb4f4d418932ae8329372141(eventobject);
}

function AS_Button_8ed47e6bbb4f4d418932ae8329372141(eventobject) {
    frmPayeeTransactionsKA.flxTransactionListsContainerKA.animate(kony.ui.createAnimation({
        100: {
            "left": '0%',
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
            "left": '0%',
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
    frmPayeeTransactionsKA.btnCompletedKA.skin = skntabSelected;
    frmPayeeTransactionsKA.btnFailedKA.skin = skntabDeselected;
}