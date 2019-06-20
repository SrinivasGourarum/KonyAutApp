require(["testScripts/automationTemplate","testScripts/automationDataMap"],function() {
 	require(["testScripts/login_uservalidations"], function() {
      jasmine.getEnv().execute();
    });
});