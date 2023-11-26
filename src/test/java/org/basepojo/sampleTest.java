package org.basepojo;

import java.util.Date;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import io.github.bonigarcia.wdm.WebDriverManager;

public class sampleTest extends BaseClass {

	@Test
	private void tc1() {
		System.out.println("TC 1 : " + Thread.currentThread().getId());
		WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver();
		driver.get("https://www.amazon.in/");
		driver.manage().window().maximize();

	}
	
	@Test(retryAnalyzer = Failed.class)
	private void tc2() {
		System.out.println("TC 2 : " + Thread.currentThread().getId());
		WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver();
		driver.get("https://www.facebook.com/");
		driver.manage().window().maximize();
		WebElement email = driver.findElement(By.id("email"));
		email.sendKeys("framework@gmail.com");
		
		WebElement password = driver.findElement(By.name("pass"));
		password.sendKeys("785480");
		
			}

	@Test
	private void tc3() {
		System.out.println("TC 3 : " + Thread.currentThread().getId());
		WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver();
		driver.get("https://www.flipkart.com/");
		driver.manage().window().maximize();
	}

	@BeforeMethod
	private void startingTime() {
		Date d = new Date();
		System.out.println(d);
	}

	@AfterMethod
	private void closingTime() {
		Date d = new Date();
		System.out.println(d);
	}

	@BeforeClass
	private void launchTheBrowser() {
		launchBrowser();
		windowMaximize();
	}

	@AfterClass
	private void closeTheBrowser() {
		closeEntireBrowser();

	}

}
