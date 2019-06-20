function frequencySegmentRowClick()
{
  var selectedIndex = frmNewTransferKA.frequencySegment.selectedIndex;
  var boolStatus = frmNewTransferKA.frequencySegment.selectedItems[0].imgicontick.isVisible;
  var name  = frmNewTransferKA.frequencySegment.selectedItems[0].lblNameKA;
  var data= {}; 
  if(boolStatus)
  {
    data = {
      lblNameKA: name,
      imgicontick:{src:"",isVisible: false}
    };
  }

  else
  {
    data = {
      lblNameKA: name,
      imgicontick:{src:"check_blue.png",isVisible: true}
    };  
  }
  loadFrequencyTypes();
  frmNewTransferKA.frequencySegment.setDataAt(data,selectedIndex[1],selectedIndex[0]);
  frmNewTransferKA.frequencyPickContainer.frequencyPickLabel.text = name;
}
function newTransferFrequencyEdit(){
  
	frmNewTransferKA.frequencyCard.animate(
        kony.ui.createAnimation({"100":{"height": frequencyCardHeight,"stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards, "duration": duration},
        {"animationEnd": function () {}}
    );
  
  frmNewTransferKA.frequencyLabel.animate(
        kony.ui.createAnimation({"100":{"left":"-65dp","stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards,"duration": duration/2},
        {"animationEnd": function () {}}
    );
  
   frmNewTransferKA.frequencyPick.animate(
        kony.ui.createAnimation({
           "100":{"opacity": 0, "stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards, "duration": duration/1.5, "delay": 0.2},
        {"animationEnd": function () {}}
    );
  
  frmNewTransferKA.frequencyPickContainer.animate(
        kony.ui.createAnimation({
           "100":{"top": "100%", "stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards, "duration": duration, "delay": 0},
        {"animationEnd": function () {}}
    );
  
}

function newTransferFrequencyMadePick(){
  
	frmNewTransferKA.frequencyCard.animate(
         kony.ui.createAnimation({"100":{"height": defaultCardHeight,"stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards, "duration": duration},
        {"animationEnd": function () {}}
	);
  
  	frmNewTransferKA.frequencyLabel.animate(
        kony.ui.createAnimation({"100":{"left": labelLeft,"stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards,"duration": duration/2},
        {"animationEnd": function () {}}
    );
  
  	frmNewTransferKA.frequencyPick.animate(
        kony.ui.createAnimation({"100":{"opacity": 1, "stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards, "duration": duration/1.5, "delay": 0.05},
        {"animationEnd": function () {}}
    );
  
  	 frmNewTransferKA.frequencyPickContainer.animate(
        kony.ui.createAnimation({
           "100":{"top": "0%", "stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards, "duration": duration, "delay": 0},
        {"animationEnd": function () {}}
    );
}