package org.stepdefinition;

import java.util.List;
import java.util.Map;

import org.basepojo.BaseClass;
import org.basepojo.projectPojo;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.*;

public class FbRegister extends BaseClass {
	projectPojo f;

	@Given("To launch the browser and maxmize the window")
	public void to_launch_the_browser_and_maxmize_the_window() {
		launchBrowser();
		windowMaximize();
	}

	@When("To launch the url of facebook application")
	public void to_launch_the_url_of_facebook_application() {
		launchUrl("https://www.facebook.com/");
	}

	@When("To click the create new account button")
	public void to_click_the_create_new_account_button() {
		f = new projectPojo();
		clickBtn(f.getCreateNwBtn());
	}

	@When("To pass the firstname in firstname text box")
	public void to_pass_the_firstname_in_firstname_text_box(DataTable d) throws InterruptedException {
		Map<String, String> m = d.asMap(String.class, String.class);
		Thread.sleep(3000);
		f = new projectPojo();
		passText(m.get("firstname2"), f.getFirstnameBox());
	}

	@When("To pass the surename in surename text box")
	public void to_pass_the_surename_in_surename_text_box() {
		f = new projectPojo();
		passText("anand", f.getLastnameBox());
	}

	@When("To pass the email in email feild")
	public void to_pass_the_email_in_email_feild(DataTable d) {
		List<Map<String, String>> m = d.asMaps(String.class, String.class);
		f = new projectPojo();
		passText(m.get(0).get("email2"), f.getEmailBox());
	}

	@When("To create new password in password feild")
	public void to_create_new_password_in_password_feild() {
		f = new projectPojo();
		passText("97864228", f.getNewPasswordbox());
	}

	@Then("To close the browser")
	public void to_close_the_browser() {
		closeEntireBrowser();
	}

}