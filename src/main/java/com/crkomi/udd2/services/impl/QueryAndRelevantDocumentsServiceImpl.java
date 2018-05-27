package com.crkomi.udd2.services.impl;

import com.crkomi.udd2.entities.QueryAndRelevantDocuments;
import com.crkomi.udd2.entities.RelevantDocument;
import com.crkomi.udd2.repositories.QueryAndRelevantDocumentsRepo;
import com.crkomi.udd2.services.QueryAndRelevantDocumentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



@Service
@Transactional
public class QueryAndRelevantDocumentsServiceImpl implements QueryAndRelevantDocumentsService {
	
	@Autowired
	private QueryAndRelevantDocumentsRepo repo;
	
	@Override
	public QueryAndRelevantDocuments findQueryAndRelevantDocuments(long id) {
		
		return repo.findQueryAndRelevantDocuments(id);
	}

	@Override
	public QueryAndRelevantDocuments createQueryAndRelevantDocuments(QueryAndRelevantDocuments data) {
		
		return repo.createQueryAndRelevantDocuments(data);
	}

	@Override
	public QueryAndRelevantDocuments updateQueryAndRelevantDocuments(QueryAndRelevantDocuments data) {

		return repo.updateQueryAndRelevantDocuments(data);
	}

	@Override
	public QueryAndRelevantDocuments removeQueryAndRelevantDocuments(QueryAndRelevantDocuments data) {
		return repo.removeQueryAndRelevantDocuments(data);
	}
	
	public void removeAllRelevantDocuments(long queryAndRelevantDocuments_Id) {
		repo.removeAllRelevantDocuments(queryAndRelevantDocuments_Id);
	}
	
	public RelevantDocument createRelevantDocument(RelevantDocument data) {
		return repo.createRelevantDocument(data);
	}
	
	public RelevantDocument removeRelevantDocument(RelevantDocument data) {
		return repo.removeRelevantDocument(data);
	}

}
