describe("user", function() {
    it("login", async function() {
	kony.automation.textbox.enterText(["frmLogin","tbxUserName"],"sam");
	kony.automation.textbox.enterText(["frmLogin","tbxPassword"],"password");
	kony.automation.widget.touch(["frmLogin","Label0f25a1928323a45"], [50,24],null,null);
	// :User Injected Code Snippet [//lets add some assertions - [3 lines]]
            expect("My Favourite Account Checking xxxxxx1234").toEqual(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","CopylblSaving0deee029f34b44e"], "text"));
            expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","CopyRichText0b6d15ac9180945"], "text")).toContain("25,000");
            expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","CopyLabel0h1f11a2cdbd247"], "text")).toEqual("TO: JASON D COSTA");
        // :End User Injected Code Snippet {f4c90a37-448b-6e56-7880-b3b948c461ff}
    });
});