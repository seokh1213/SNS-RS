package com.river.snsrsweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/friend")
public class FriendController {
    @GetMapping("/recommend-list")
    public String recommendList(){
        return "/friend/recommendList";
    }
    @GetMapping("/my-follow-list")
    public String myFollowList(){
        return "/friend/myFollowList";
    }

    @PostMapping("/follow")
    public String follow(){
        return null;
    }
    @PostMapping("/unfollow")
    public String unfollow(){
        return null;
    }


}
