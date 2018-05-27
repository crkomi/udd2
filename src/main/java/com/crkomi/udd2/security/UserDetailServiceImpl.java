package com.crkomi.udd2.security;

import java.util.ArrayList;
import java.util.Collection;

import com.crkomi.udd2.entities.Account;
import com.crkomi.udd2.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;



@SuppressWarnings("deprecation")
@Component
public class UserDetailServiceImpl implements UserDetailsService {

    @Autowired
    private AccountService service;

	public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
        Account account = service.findAccountByUsername(name);
        if(account == null) {
            throw new UsernameNotFoundException("no user found with " + name);
        }
        else {
        	String username = account.getUsername();
	        String password = account.getPassword();
	        //additional informations
	        boolean enabled = account.getStatus().equals("ACTIVE");
	        boolean accountNonExpired = account.getStatus().equals("ACTIVE");
	        boolean credentialsNonExpired = account.getStatus().equals("ACTIVE");
	        boolean accountNonLocked = account.getStatus().equals("ACTIVE");
	        
	        Collection<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
	        GrantedAuthority grantedAuthority = new GrantedAuthority() {
				@Override
				public String getAuthority() {
					return account.getRole();
				}
			};
	        authorities.add(new SimpleGrantedAuthority(account.getRole()));//new GrantedAuthorityImpl(account.getRole())
	        User securityUser = new User(username, password,enabled,accountNonExpired,credentialsNonExpired,accountNonLocked,authorities);
			System.out.println("Pasword: " + password);
			return securityUser;
        }
    }

}