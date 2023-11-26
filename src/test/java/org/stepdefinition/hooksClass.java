package org.stepdefinition;

import org.basepojo.BaseClass;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class hooksClass extends BaseClass {
	
	@Before
	private void preCondition() {
       launchBrowser();
       windowMaximize();
	}
	@After
	private void postCondition() {
		closeEntireBrowser();

	}

}
