package com.crkomi.udd2.controllers;

import com.crkomi.udd2.entities.Account;
import com.crkomi.udd2.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import javax.servlet.ServletContext;
import java.io.File;

@Controller
public class InitController implements CommandLineRunner {

    private static final String groupsPath = "./src/main/resources/properties/groups.yml";
    private static final String usersPath = "./src/main/resources/static";
    public static String abspluteResourceFile;

    @Autowired
    private AccountService accountService;

    @Autowired
    private ServletContext servletContext;

    @Override
    public void run(String... args) throws Exception {
        Account account = new Account();
        account.setFirstName("test");
        account.setLastName("test");
        account.setPassword("test");
        account.setUsername("test");
        account.setStatus("ACTIVE");
        account.setRole("Admin");
        String realPathDocs = servletContext.getRealPath(File.separator + "docs");
        String dirName = account.getUsername();
        File newDirectory = new File(realPathDocs + File.separator + dirName);
        newDirectory.mkdirs();

        account.setDirectoryPath(realPathDocs + File.separator + dirName);
        account = accountService.createAccount(account);
    }
}
