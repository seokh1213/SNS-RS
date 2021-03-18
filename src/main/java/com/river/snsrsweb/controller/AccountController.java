package com.river.snsrsweb.controller;

import com.river.snsrsweb.service.AccountService;
import org.hibernate.procedure.NoSuchParameterException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.security.auth.login.FailedLoginException;

@Controller
@RequestMapping("/account")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @GetMapping(path = {"","/", "/login"})
    public String loginPage(){
        return "/account/loginPage";
    }
    @GetMapping("/join")
    public String joinPage(){
        return "/account/joinPage";
    }
    @GetMapping("/update")
    public String idUpdatePage(){
        return "/account/idUpdatePage";
    }

    @PostMapping("/join")
    public String join(@RequestParam(value = "id") String id) throws NoSuchParameterException, ResponseStatusException {
        if(id.equals("")) throw new NoSuchParameterException("Parameter 'id' is not exists.");
        if(!accountService.join(id)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "That id is already exists.");
        }
        return "redirect:/account/login";
    }

    @PostMapping("/update")
    public String idUpdate(@RequestParam(value = "id") String id) throws NoSuchParameterException, ResponseStatusException{
        if(id.equals("")) throw new NoSuchParameterException("Parameter 'id' is not exists.");
        if(!accountService.idUpdate(id)){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Something is worng.");
        }
        return "redirect:/account/login";
    }

}
