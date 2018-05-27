package com.crkomi.udd2.tools.util;

import com.crkomi.udd2.tools.models.QueryAndRelevantDocumentsModel;

import java.util.ArrayList;
import java.util.List;


public class QueryAndRelevantDocumentsList {

	private List<QueryAndRelevantDocumentsModel> queryAndRelevantDocumentsList = new ArrayList<QueryAndRelevantDocumentsModel>();

	public List<QueryAndRelevantDocumentsModel> getQueryAndRelevantDocumentsList() {
		return queryAndRelevantDocumentsList;
	}

	public void setQueryAndRelevantDocumentsList(List<QueryAndRelevantDocumentsModel> queryAndRelevantDocumentsList) {
		this.queryAndRelevantDocumentsList = queryAndRelevantDocumentsList;
	}

}
