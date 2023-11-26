package org.basepojo;

import org.testng.IRetryAnalyzer;
import org.testng.ITestResult;

public class Failed implements IRetryAnalyzer{
	
	@Override
	public boolean retry(ITestResult result) {
		
		int min = 0, max = 3;
		
		if (min<max) {
			
			min++;
			
			return true;
			
		}
		
		return false;
	}

}
