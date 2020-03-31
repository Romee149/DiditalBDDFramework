
	package utilities;

	import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
	import org.openqa.selenium.chrome.ChromeDriver;

	public class browserSetup {
		static WebDriver driver;
		
		public static WebDriver getBrowser()
		
		{

			 System.setProperty("webdriver.chrome.driver", "C:\\Users\\Romee Afroz\\Browsertest\\BDDFAutomation\\driv\\chromedriver.exe");
			 driver = new ChromeDriver();
			 driver.manage().window().maximize();
			 driver.manage().deleteAllCookies();
			 driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			 return driver;
		}

	}


