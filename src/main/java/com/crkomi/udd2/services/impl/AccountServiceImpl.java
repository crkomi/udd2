package com.crkomi.udd2.services.impl;

import java.util.List;
import java.util.Set;

import com.crkomi.udd2.entities.Account;
import com.crkomi.udd2.entities.Benchmark;
import com.crkomi.udd2.repositories.AccountRepo;
import com.crkomi.udd2.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



@Service
@Transactional
public class AccountServiceImpl implements AccountService {

	@Autowired
	private AccountRepo repo;

	@Autowired
    private PasswordEncoder passwordEncoder;

    public Account findAccount(Long id) {
        return repo.findAccount(id);
    }

    public Account createAccount(Account data) {
        Account account = repo.findAccountByUsername(data.getUsername());
        if(account == null){
            data.setPassword(passwordEncoder.encode(data.getPassword()));
        	return repo.createAccount(data);}
        else 
        	return null;
    }

    public List<Account> findAllAccounts() {
        return repo.findAllAccounts();
    }

    public Account findAccountByUsername(String username) {
        return repo.findAccountByUsername(username);
    }
    
    public Account updateAccount(Account data) {
    	return repo.updateAccount(data);
    }
    
    public Account removeAccount(Account data) {
    	return repo.removeAccount(data);
    }

	public Set<Benchmark> getAllBenchmarksForThisAccount(String username) {
		
		return repo.getAllBenchmarksForThisAccount(username);
	}
    
}