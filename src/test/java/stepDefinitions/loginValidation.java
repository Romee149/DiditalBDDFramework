package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;
import elementsLocator.elementslocator;
import testData.userData;
import utilities.browserSetup;

import org.junit.Assert;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;


@RunWith(Cucumber.class)
 
	public class loginValidation extends browserSetup {
		 WebDriver driver;
			 	
@Given("^Login Page of the forum website$")
public void login_page_of_the_forum_website() throws Throwable {
driver=getBrowser();  
}
@When("^User type Login page url$")
public void user_type_login_page_url() throws Throwable {
	driver.get(userData.loginURL);  
}
@Then("^Login page should be launched$")
public void login_page_should_be_launched() throws Throwable {
    System.out.println("Login page open");
}
@And("^User type the UID (.+) and Password (.+)$")
public void user_type_the_uid_and_password(String uid, String password) throws Throwable {
	driver.findElement(elementslocator.email).sendKeys(uid);
	driver.findElement(elementslocator.password).sendKeys(password);
}

@And("^User click on login button$")
public void user_click_on_login_button() throws Throwable {
	driver.findElement(elementslocator.loginBtn).click();  
}

@And("^Login title is validated$")
public void login_title_is_validated() throws Throwable {
	String Lexpectedtile=userData.LogTitle;
	String Lactualtitle=driver.getTitle();
	Assert.assertEquals(Lexpectedtile, Lactualtitle);
    
}

}