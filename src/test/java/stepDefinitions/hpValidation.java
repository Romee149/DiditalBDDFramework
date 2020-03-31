package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;
import testData.userData;
import utilities.browserSetup;

import org.junit.Assert;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;


@RunWith(Cucumber.class)
public class hpValidation extends browserSetup {
	 WebDriver driver;
	 @Given("^Home Page of the forum website$")
	    public void home_page_of_the_forum_website() throws Throwable {
	       
		driver=getBrowser();
		
	    }

	    @When("^User type home page url$")
	    public void user_type_home_page_url() throws Throwable {
	      
	    	driver.get(userData.Homeurl);
	    }

	    @Then("^Home page should be lanucned$")
	    public void home_page_should_be_lanucned() throws Throwable {
	       
	    	System.out.println("The Home page is landed");
	    }

	    @And("^Hometitle is validated$")
	    public void hometitle_is_validated() throws Throwable {
	    	
	    	String hexpectedtile="Digital Point Forum";
	    	String hactualtitle=driver.getTitle();
	    	Assert.assertEquals(hexpectedtile, hactualtitle);
	      
	    }

}
