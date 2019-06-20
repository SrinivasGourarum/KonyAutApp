describe("Login", function() {
  	beforeEach( async function() {
		//gets executed once before each spec in the describe
      await kony.automation.playback.wait(1000);
	});
    it("userLogin1", async function() {
      validateLogin(user1);
      
    });
  	it("userLogin2", async function() {
      validateLogin(user2);
    });
});

async function validateLogin(userDetails) {
	kony.automation.textbox.enterText(tbxUserName,userDetails.username);
	kony.automation.textbox.enterText(tbxPassword,userDetails.password);
	kony.automation.widget.touch(lblLogin, [74,28],null,null);
  	await kony.automation.playback.wait(1000);
    // :User Injected Code Snippet [//assert upcomming transaction - [3 lines]]
    expect(kony.automation.widget.getWidgetProperty(lblUserWelcome, "text")).toContain(userDetails.username);
    // :End User Injected Code Snippet {dbb60bdf-7a4c-9c34-75a5-e753fae76209}
    kony.automation.button.click(btnLogout);
    await kony.automation.playback.wait(1000);
}