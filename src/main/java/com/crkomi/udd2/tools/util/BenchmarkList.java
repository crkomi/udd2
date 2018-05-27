package com.crkomi.udd2.tools.util;

import com.crkomi.udd2.tools.models.BenchmarkModel;

import java.util.ArrayList;
import java.util.List;



public class BenchmarkList {

	List<BenchmarkModel> benchmarks = new ArrayList<BenchmarkModel>();

	public List<BenchmarkModel> getBenchmarks() {
		return benchmarks;
	}

	public void setBenchmarks(List<BenchmarkModel> benchmarks) {
		this.benchmarks = benchmarks;
	}
	
	
}
