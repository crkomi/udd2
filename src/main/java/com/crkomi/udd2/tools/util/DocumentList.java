package com.crkomi.udd2.tools.util;

import com.crkomi.udd2.tools.models.DocumentModel;

import java.util.ArrayList;
import java.util.List;


public class DocumentList {
	
	private List<DocumentModel> documents = new ArrayList<DocumentModel>();
	
	public List<DocumentModel> getDocuments() {
		return documents;
	}

	public void setDocuments(List<DocumentModel> documents) {
		this.documents = documents;
	}
	
	
}
