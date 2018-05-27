package com.crkomi.udd2.services;


import com.crkomi.udd2.entities.QueryAndRelevantDocuments;
import com.crkomi.udd2.entities.RelevantDocument;

public interface QueryAndRelevantDocumentsService {

	public QueryAndRelevantDocuments findQueryAndRelevantDocuments(long id);
	public QueryAndRelevantDocuments createQueryAndRelevantDocuments(QueryAndRelevantDocuments data);
	public QueryAndRelevantDocuments updateQueryAndRelevantDocuments(QueryAndRelevantDocuments data);
	public QueryAndRelevantDocuments removeQueryAndRelevantDocuments(QueryAndRelevantDocuments data);
	public void removeAllRelevantDocuments(long queryAndRelevantDocuments_Id);
	public RelevantDocument createRelevantDocument(RelevantDocument data);
	public RelevantDocument removeRelevantDocument(RelevantDocument data);
	
}
