function onMessagesCategorySelection(){
	var userAgent = kony.os.userAgent();
	var selectedKey;
	if (userAgent === "iPhone" || userAgent === "iPad"){
		selectedKey = frmMyMessagesKA.rbnCategoryKA.selectedKey;
	} else {
		selectedKey = getSelectedMessagesCategory();
	}
	switch(selectedKey){
		case 'inbox':
		frmMyMessagesKA.flxSegSwitcherKA.left = '0%';
		break;
		case 'draft':
		frmMyMessagesKA.flxSegSwitcherKA.left = '-100%';
		break;
		case 'sent':
		frmMyMessagesKA.flxSegSwitcherKA.left = '-200%';
		break;
		case 'deleted':
		frmMyMessagesKA.flxSegSwitcherKA.left = '-300%';
		break;	
	}
}

function onMyMessagesRowClick(){
	var userAgent = kony.os.userAgent();
	var selectedKey;
	if (userAgent === "iPhone" || userAgent === "iPad"){
		selectedKey = frmMyMessagesKA.rbnCategoryKA.selectedKey;
	} else {
		selectedKey = getSelectedMessagesCategory();
	}
	switch(selectedKey){
		case 'inbox': 
		frmMessageDetailKA.show();
		break;
		case 'draft':
		frmMessageDraftKA.show();
		break;
		case 'sent':
		frmMessageSentKA.show();
		break;
		case 'deleted':
		frmMessageDeletedKA.show();
		break;
	}
}

function getSelectedMessagesCategory(){
	var position = frmMyMessagesKA.flxSelectedIndicatorKA.left;
	kony.print('position is '+position);
	var index = (position.slice(0, -1))/25; // slice off the last character - '%'
	switch(index){
		case 0:
		return 'inbox';
		case 1:
		return 'draft';
		case 2:
		return 'sent';
		case 3:
		return 'deleted';
	}
	return index;
}

function onMessageInboxSelected(){
	if (userAgent !== "iPhone" && userAgent !== "iPad"){
		frmMyMessagesKA.btnInboxKA.skin = sknandroidSegmentedTextActive;
		frmMyMessagesKA.btnDraftKA.skin = sknandroidSegmentedTextInactive;
		frmMyMessagesKA.btnSentKA.skin = sknandroidSegmentedTextInactive;
		frmMyMessagesKA.btnDeletedKA.skin = sknandroidSegmentedTextInactive;
		frmMyMessagesKA.flxSelectedIndicatorKA.left = '0%';
		onMessagesCategorySelection();
	}
}

function onMessageDraftSelected(){
	if (userAgent !== "iPhone" && userAgent !== "iPad"){
		frmMyMessagesKA.btnInboxKA.skin = sknandroidSegmentedTextInactive;
		frmMyMessagesKA.btnDraftKA.skin = sknandroidSegmentedTextActive;
		frmMyMessagesKA.btnSentKA.skin = sknandroidSegmentedTextInactive;
		frmMyMessagesKA.btnDeletedKA.skin = sknandroidSegmentedTextInactive;
		frmMyMessagesKA.flxSelectedIndicatorKA.left = '25%';
		onMessagesCategorySelection();
	}
}

function onMessageSentSelected(){
	if (userAgent !== "iPhone" && userAgent !== "iPad"){
		frmMyMessagesKA.btnInboxKA.skin = sknandroidSegmentedTextInactive;
		frmMyMessagesKA.btnDraftKA.skin = sknandroidSegmentedTextInactive;
		frmMyMessagesKA.btnSentKA.skin = sknandroidSegmentedTextActive;
		frmMyMessagesKA.btnDeletedKA.skin = sknandroidSegmentedTextInactive;
		frmMyMessagesKA.flxSelectedIndicatorKA.left = '50%';
		onMessagesCategorySelection();
	}
}

function onMessageDeletedSelected(){
	if (userAgent !== "iPhone" && userAgent !== "iPad"){
		frmMyMessagesKA.btnInboxKA.skin = sknandroidSegmentedTextInactive;
		frmMyMessagesKA.btnDraftKA.skin = sknandroidSegmentedTextInactive;
		frmMyMessagesKA.btnSentKA.skin = sknandroidSegmentedTextInactive;
		frmMyMessagesKA.btnDeletedKA.skin = sknandroidSegmentedTextActive;
		frmMyMessagesKA.flxSelectedIndicatorKA.left = '75%';
		onMessagesCategorySelection();
	}
}

function enableMessageSendReplyButton(){
	kony.print("tboxReplyKA text is"+frmMessageReplyKA.tboxReplyKA.text);
	if(frmMessageReplyKA.tboxReplyKA.text !== ''){
		frmMessageReplyKA.btnReplyKA.skin = sknprimaryAction;
	} else {
		frmMessageReplyKA.btnReplyKA.skin = sknprimaryActionDisabled;
	}
}

function enableNewMessageSendButton(){
	var textFields = ['tboxAccountNameKA', 'tboxCategoryKA', 'tboxSubcategoryKA', 'tboxSubjectKA', 'tboxMessageDescriptionKA'];
	var allFilled = false;
	textFields.forEach(function(tField){
		kony.print('text of '+tField+' is'+frmNewMessageKA[tField].text);
		if(frmNewMessageKA[tField].text !== null && frmNewMessageKA[tField].text !== ''){
			allFilled = true;	
		} else {
			allFilled = false;
			return;
		}
	});
	kony.print('allFilled '+allFilled);

	if(allFilled){
		frmNewMessageKA.btnSendKA.skin = sknprimaryAction;
	} else {
		frmNewMessageKA.btnSendKA.skin = sknprimaryActionDisabled;
	}
}

function onNewMessageSendClick(){
	frmMyMessagesKA.rbnCategoryKA.selectedKey = 'sent';
	onMessageSentSelected();
	frmMyMessagesKA.show();
}
