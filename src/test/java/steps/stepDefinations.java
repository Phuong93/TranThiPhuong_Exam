package steps;

import java.util.List;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.DataTable;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utils.Utilitiy;

public class stepDefinations {
	Utilitiy support = new Utilitiy();
	@Before
	public void setup() {
		support.launchBrowser("chrome");
	}

	@After
	public void teardown(Scenario scenario) {
		if (scenario.isFailed()) {
			try {
				byte[] animation = ((TakesScreenshot) Utilitiy.driver).getScreenshotAs(OutputType.BYTES);
				scenario.embed(animation, "image/png");
			} catch (Exception e) {
				e.printStackTrace();
			}
		}else if(!scenario.isFailed()){
			try {
				byte[] animation = ((TakesScreenshot) Utilitiy.driver).getScreenshotAs(OutputType.BYTES);
				scenario.embed(animation, "image/png");
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		Utilitiy.driver.quit();

	}
	
	@Given("^I want to open the URL with browser$")
	public void i_want_to_open_the_with_browser() throws Throwable {
		support.gotoWebSite();
	}

	@When("^I enter the valid datas into fields at the register form$")
	public void i_enter_values_into_the_form(DataTable data) throws Throwable {
		List<List<String>> list = data.raw();
		support.sendKeyEvent(list.get(1).get(0), list.get(1).get(1), list.get(1).get(2));
		support.sendKeyEvent(list.get(2).get(0), list.get(2).get(1), list.get(2).get(2));
		support.sendKeyEvent(list.get(3).get(0), list.get(3).get(1), list.get(3).get(2));
		support.sendKeyEvent(list.get(4).get(0), list.get(4).get(1), list.get(4).get(2));
		support.sendKeyEvent(list.get(5).get(0), list.get(5).get(1), list.get(5).get(2));
		support.sendKeyEvent(list.get(6).get(0), list.get(6).get(1), list.get(6).get(2));
	}

	@When("^I select \"([^\"]*)\"$")
	public void i_select_the_state_as(String arg, DataTable data) throws Throwable {
		List<List<String>> list = data.raw();
		support.selectDropdownList(list.get(1).get(0), list.get(1).get(1), list.get(1).get(2));
	}

	@When("^I enter \"([^\"]*)\"$")
	public void i_enter_postal_code_as(String arg, DataTable data) throws Throwable {
		List<List<String>> list = data.raw();
		support.sendKeyEvent(list.get(1).get(0), list.get(1).get(1), list.get(1).get(2));
	}

	@When("^I click on \"([^\"]*)\"$")
	public void i_click_on(String arg, DataTable data) throws Throwable {
		List<List<String>> list = data.raw();
		support.clickEvent(list.get(1).get(0), list.get(1).get(1));
	}

	@When("^I hover on \"([^\"]*)\"$")
	public void i_hover_on(String arg, DataTable data) throws Throwable {
		List<List<String>> list = data.raw();
		support.hoverToEvent(list.get(1).get(0), list.get(1).get(1));
	}
	
	@When("^I wait to see \"([^\"]*)\"$")
	public void i_wait_to_see(String arg, DataTable data) throws Throwable {
		List<List<String>> list = data.raw();
		support.waitEvent(list.get(1).get(0), list.get(1).get(1));
	}
	
	@When("^I move to \"([^\"]*)\"$")
	public void i_move_to(String arg, DataTable data) throws Throwable {
		List<List<String>> list = data.raw();
		support.moveToEvent(list.get(1).get(0), list.get(1).get(1));
	}

	@Then("^I verify the total price$")
	public void i_verify_the_total_price(DataTable data) throws Throwable {
		List<List<String>> list = data.raw();
		support.verifyTotalPrice(list.get(1).get(0), list.get(1).get(1), list.get(1).get(2) );

	}

}
