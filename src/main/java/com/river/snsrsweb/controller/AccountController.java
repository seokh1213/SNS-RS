package com.river.snsrsweb.controller;

import org.hibernate.procedure.NoSuchParameterException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.security.auth.login.FailedLoginException;

@Controller
@RequestMapping("/account")
public class AccountController {
    @GetMapping(path = {"","/", "/login-page"})
    public String loginPage(){
        return "/account/loginPage";
    }
    @GetMapping("/join-page")
    public String joinPage(){
        return "/account/joinPage";
    }
    @GetMapping("/id-update-page")
    public String idUpdatePage(){
        return "/account/idUpdatePage";
    }

    @PostMapping("/join")
    public String join(@RequestParam(value = "id") String id) throws NoSuchParameterException {
        if(id.equals("")) throw new NoSuchParameterException("Parameter 'id' is not exists.");
        return "redirect:/account/login-page";
    }
    @PostMapping("/login")
    public String login(@RequestParam(value = "id") String id)  throws NoSuchParameterException {
        if(id.equals("")) throw new NoSuchParameterException("Parameter 'id' is not exists.");
        return "redirect:/friend/recommend-list?id="+id;
    }
    @PostMapping("/id-update")
    public String idUpdate(@RequestParam(value = "id") String id) throws NoSuchParameterException{
        if(id.equals("")) throw new NoSuchParameterException("Parameter 'id' is not exists.");
        return "redirect:/account/login-page";
    }
}
