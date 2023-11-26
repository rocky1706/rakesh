package org.stepdefinition;

import org.basepojo.BaseClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class fbLogin extends BaseClass {

	@Given("To launch the browser and maximize the window")
	public void to_launch_the_browser_and_maximize_the_window() {
		launchBrowser();
		windowMaximize();
	}

	@When("User has to launch the url page of facebook application")
	public void user_has_to_launch_the_url_page_of_facebook_application() {
		launchUrl("https://www.facebook.com/");
	}

	@When("User has to pass the data {string} in email feild")
	public void user_has_to_pass_the_data_in_email_feild(String em) {
		WebElement email = driver.findElement(By.id("email"));
		email.sendKeys(em);
	}

	@When("User has to pass the data {string} in password feild")
	public void user_has_to_pass_the_data_in_password_feild(String passw) {
		WebElement pass = driver.findElement(By.name("pass"));
		pass.sendKeys(passw);
	}

	@When("User has to click the button")
	public void user_has_to_click_the_button() {
		WebElement logBtn = driver.findElement(By.name("login"));
		logBtn.click();
	}
	@Then("User has to close the browser")
	public void user_has_to_close_the_browser() {
		closeEntireBrowser();
	}

}
