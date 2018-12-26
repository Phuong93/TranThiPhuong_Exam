package utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Utilitiy {
	public static WebDriver driver = null;
	private String rootPath = System.getProperty("user.dir");
	private final String referencesPath = "/src/test/resources/webdriver/";
	
	public WebDriver launchBrowser(String browserName) {
		switch (browserName.toLowerCase()) {
		case "chrome":
			System.setProperty("webdriver.chrome.driver", rootPath + referencesPath + "chromedriver");
			driver = new ChromeDriver();
			break;
		case "firefox":
			System.setProperty("webdriver.gecko.driver", rootPath + referencesPath + "geckodriver");
			driver = new FirefoxDriver();
			break;
		default:
			System.out.println("Sorry, this browser is invalid");
			break;
		}
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
//		driver.manage().window().maximize();
		return driver;
	}
	
	public void gotoWebSite() {
		ReadProperties readProperties = new ReadProperties();
		driver.get(readProperties.getApplicationUrl("URL"));
	}

	public WebElement getElements(String eName, String eLocator) {
		WebElement e = null;
		if (eName.toLowerCase().endsWith("-id")) {
			e = driver.findElement(By.id(eLocator));
		} else if (eName.toLowerCase().endsWith("-name")) {
			e = driver.findElement(By.name(eLocator));
		} else if (eName.toLowerCase().endsWith("-xpath")) {
			e = driver.findElement(By.xpath(eLocator));
		} else if (eName.toLowerCase().endsWith("-class")) {
			e = driver.findElement(By.className(eLocator));
		} else if (eName.toLowerCase().endsWith("-css")) {
			e = driver.findElement(By.cssSelector(eLocator));
		} else if (eName.toLowerCase().endsWith("-tagname")) {
			e = driver.findElement(By.tagName(eLocator));
		} else {
			System.out.println("eName is invalid, please check");
		}
		return e;
	}
	
	public void sendKeyEvent(String eName, String eLocator, String value) {
		WebElement e = getElements(eName, eLocator);
		e.clear();
		e.sendKeys(value);
	}
	
	public void clickEvent(String eName, String eLocator) {
		WebElement e = getElements(eName, eLocator);
		e.click();
	}
	public void selectDropdownList(String eName, String eLocator, String value) {
		WebElement e = getElements(eName, eLocator);
		Select ddl = new Select(e);
		ddl.selectByVisibleText(value);
	}
	public void hoverToEvent(String eName, String eLocator) throws InterruptedException {
		WebElement e = getElements(eName, eLocator);
		Actions actions = new Actions(driver);
		actions.moveToElement(e);
		actions.perform();
		Thread.sleep(1000);
	}
	
	public void moveToEvent(String eName, String eLocator)  {
		WebElement e = getElements(eName, eLocator);
		if (driver instanceof JavascriptExecutor) {
	        ((JavascriptExecutor) driver)
	            .executeScript("arguments[0].scrollIntoView(true);", e);
	    }
	}
	
	public void waitEvent(String eName, String eLocator) {
		WebDriverWait wait = new WebDriverWait(driver, 15);		
		if (eName.toLowerCase().endsWith("-id")) {
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(eLocator)));
		} else if (eName.toLowerCase().endsWith("-name")) {
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.name(eLocator)));
		} else if (eName.toLowerCase().endsWith("-xpath")) {
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(eLocator)));
		} else if (eName.toLowerCase().endsWith("-class")) {
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.className(eLocator)));
		} else if (eName.toLowerCase().endsWith("-css")) {
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(eLocator)));
		} else if (eName.toLowerCase().endsWith("-tagname")) {
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.tagName(eLocator)));
		} else {
			System.out.println("eName is invalid, please check");
		}
	}
	
	public void verifyTotalPrice(String eName, String eLocator, String Expected) throws IOException {
		WebElement totalPrice = getElements(eName, eLocator);
		String filePath = System.getProperty("user.dir");
		String filename = filePath + "/src/test/resources/DataOut/verifyPriceResult.xlsx";
		File src = new File(filename);
		FileInputStream fis = new FileInputStream(src);
		XSSFWorkbook wb = new XSSFWorkbook(fis);
		XSSFSheet sh1 = wb.getSheetAt(0);
		String text = totalPrice.getText();
		sh1.createRow(1).createCell(0).setCellValue(text);
		sh1.getRow(1).createCell(1).setCellValue(Expected);
		CellStyle cellStyle = wb.createCellStyle();

        Cell cell = sh1.getRow(1).createCell(2);
		if (text.equals(Expected)) {
			cell.setCellValue("Pass");
			cellStyle.setFillForegroundColor(IndexedColors.GREEN.getIndex());
		}else {			
			cellStyle.setFillForegroundColor(IndexedColors.RED.getIndex());
			cell.setCellValue("Fail");
		}
		cellStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
		cell.setCellStyle(cellStyle);
		
		FileOutputStream fout = new FileOutputStream(new File(filename));
		wb.write(fout);
		fout.close();
		wb.close();
		System.out.println("Write report success!");
	}
	public void closeBrowser() {
		driver.close();
	}
}
