import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

/**
 * @author Phuong.Tran
 *
 */

@RunWith(Cucumber.class)
@CucumberOptions(
		 plugin = {"pretty", "html:target/cucumber",
					"json:target/cucumber.json" },
         features = "src/test/resources/Features", 
         glue = {"steps" },
         tags = {"@ShoppingProducts"}
)
class TestRuner {

}
