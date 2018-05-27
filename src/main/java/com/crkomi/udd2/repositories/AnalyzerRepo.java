package com.crkomi.udd2.repositories;

import com.crkomi.udd2.entities.Analyzer;

import java.util.List;

public interface AnalyzerRepo {
		public Analyzer findAnalyzer(long id);
		public Analyzer createAnalyzer(Analyzer data);
	    public Analyzer updateAnalyzer(Analyzer data);
	    public Analyzer removeAnalyzer(Analyzer data);
	    public List<Analyzer> getAllAnalyzers();
}
