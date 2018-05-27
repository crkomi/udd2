package com.crkomi.udd2.services.impl;

import java.util.List;

import com.crkomi.udd2.entities.Analyzer;
import com.crkomi.udd2.repositories.AnalyzerRepo;
import com.crkomi.udd2.services.AnalyzerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class AnalyzerServiceImpl implements AnalyzerService {

	@Autowired
	private AnalyzerRepo repo;
	
	public Analyzer findAnalyzer(long id) {
		return repo.findAnalyzer(id);
	}
	
	public Analyzer createAnalyzer(Analyzer data) {
		return repo.createAnalyzer(data);
	}

	public Analyzer updateAnalyzer(Analyzer data) {
		return repo.updateAnalyzer(data);
	}

	public Analyzer removeAnalyzer(Analyzer data) {
		return repo.removeAnalyzer(data);
	}

	public List<Analyzer> getAllAnalyzers() {
		return repo.getAllAnalyzers();
	}

}
