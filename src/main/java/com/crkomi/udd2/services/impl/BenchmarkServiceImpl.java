package com.crkomi.udd2.services.impl;

import java.util.List;

import com.crkomi.udd2.entities.Benchmark;
import com.crkomi.udd2.entities.RelevantDocument;
import com.crkomi.udd2.repositories.BenchmarkRepo;
import com.crkomi.udd2.services.BenchmarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class BenchmarkServiceImpl implements BenchmarkService {
	
	@Autowired
	private BenchmarkRepo repo;

	@Override
	public Benchmark createBenchmark(Benchmark data) {
		
		return repo.createBenchmark(data);
	}

	@Override
	public List<RelevantDocument> getAllRelevantDocs(long benchmarkId) {
		
		return repo.getAllRelevantDocs(benchmarkId);
	}

	@Override
	public RelevantDocument addRelevantDocument(RelevantDocument data) {
	
		return repo.addRelevantDocument(data);
	}

	@Override
	public Benchmark findBenchmark(long id) {
		
		return repo.findBenchmark(id);
	}

	@Override
	public Benchmark updateBenchmark(Benchmark data) {
		
		return repo.updateBenchmark(data);
	}

	@Override
	public Benchmark removeBenchmark(Benchmark data) {
		
		return repo.removeBenchmark(data);
	}

	@Override
	public void removeAllDocumentPaths(long benchmark_id) {
		repo.removeAllDocumentPaths(benchmark_id);		
	}

	@Override
	public void removeAllQueriesAndRelevantDocuments(long benchmark_id) {
		repo.removeAllQueriesAndRelevantDocuments(benchmark_id);		
	}
}
