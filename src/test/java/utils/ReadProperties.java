package utils;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;


public class ReadProperties {
	private Properties properties;
	private final String propertyFilePath= System.getProperty("user.dir") + "/src/test/resources/properties/objects.properties";
 
	public ReadProperties(){
		BufferedReader reader;
		try {
			reader = new BufferedReader(new FileReader(propertyFilePath));
			properties = new Properties();
			try {
				properties.load(reader);
				reader.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
			throw new RuntimeException("objects.properties not found at " + propertyFilePath);
		}		
	}
	public String getApplicationUrl(String string) {
		String url = properties.getProperty("URL");
		if(url != null) return url;
		else throw new RuntimeException("url not specified in the objects.properties file.");
	}
	
		
 
}
