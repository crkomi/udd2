package com.crkomi.udd2.repositories;

import com.crkomi.udd2.entities.Account;
import com.crkomi.udd2.entities.Benchmark;

import java.util.List;
import java.util.Set;

public interface AccountRepo {
	public List<Account> findAllAccounts();
    public Account findAccount(Long id);
    public Account findAccountByUsername(String username);
    public Account createAccount(Account data);
    public Account updateAccount(Account data);
    public Account removeAccount(Account data);
    public Set<Benchmark> getAllBenchmarksForThisAccount(String username);
}
