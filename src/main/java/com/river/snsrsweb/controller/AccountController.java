package com.river.snsrsweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/account")
public class AccountController {
    @GetMapping(path = {"","/", "/login-page"})
    public String loginPage(){
        return "/account/loginPage";
    }
    @GetMapping("join-page")
    public String joinPage(){
        return "/account/joinPage";
    }
    @GetMapping("id-updated-page")
    public String idUpdatedPage(){
        return "/account/idUpdatedPage";
    }
}
