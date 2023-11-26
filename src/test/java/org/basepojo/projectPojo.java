package org.basepojo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class projectPojo extends BaseClass {

	public projectPojo() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//a[text()='Create new account']")
	private WebElement createNwBtn;

	@FindBy(xpath = "//input[@placeholder='First name']")
	private WebElement firstnameBox;

	@FindBy(name = "lastname")
	private WebElement lastnameBox;

	@FindBy(name = "reg_email__")
	private WebElement emailBox;

	public WebElement getCreateNwBtn() {
		return createNwBtn;
	}

	public WebElement getFirstnameBox() {
		return firstnameBox;
	}

	public WebElement getLastnameBox() {
		return lastnameBox;
	}

	public WebElement getEmailBox() {
		return emailBox;
	}

	public WebElement getNewPasswordbox() {
		return newPasswordbox;
	}

	@FindBy(name = "reg_passwd__")
	private WebElement newPasswordbox;

}
