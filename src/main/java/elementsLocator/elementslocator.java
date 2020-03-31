package elementsLocator;

import org.openqa.selenium.By;

public class elementslocator {
	public static By email= By.name("email");
	public static By password =By.name("password");
	public static By loginBtn=  By.xpath("/html/body/div[2]/div/div/form/div/div[2]/div[3]/div[2]/button");
	public static By userlogoutDrop = By.xpath("//*[@id='navbar-right']/li/a");
	public static By userlogout =By.xpath("//*[@id='navbar-right']/li/ul/li/a");
}
