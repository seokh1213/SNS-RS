package com.river.snsrsweb.controller;

import com.river.snsrsweb.domain.User;
import com.river.snsrsweb.service.AccountService;
import com.river.snsrsweb.service.FriendService;
import org.hibernate.procedure.NoSuchParameterException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/friend")
public class FriendController {
    @Autowired
    FriendService service;

    @GetMapping("/recommend-list")
    public String recommendList(Model model, @SessionAttribute("userId") String id){
        List<User> unfollowList=new ArrayList<>();
        if(!id.equals("")){
            unfollowList =service.unfollowList(id);
            System.out.println(unfollowList);
            for(User user: unfollowList){
                System.out.println(user.getPhoneNumber());
            }
        }
        model.addAttribute("list",unfollowList);
        return "/friend/recommendList";
    }
    @GetMapping("/my-follow-list")
    public String myFollowList(Model model, @SessionAttribute("userId") String id){
        List<User> followList=new ArrayList<>();
        if(!id.equals("")){
            followList =service.followList(id);
            System.out.println(followList);
            for(User user: followList){
                System.out.println(user.getPhoneNumber());
            }
        }
        model.addAttribute("list",followList);
        return "/friend/myFollowList";
    }

    @GetMapping("/follow")
    public String follow(@SessionAttribute("userId") String id, @RequestParam(value = "id") String opponentId ) throws NoSuchParameterException, ResponseStatusException {
        if(opponentId.equals("")) throw new NoSuchParameterException("Parameter 'id' is not exists.");
        if(!service.follow(id, opponentId)){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Something is worng.");
        }
        return "redirect:/friend/recommend-list";
    }

    @GetMapping("/unfollow")
    public String unfollow(@SessionAttribute("userId") String id, @RequestParam(value = "id") String opponentId) throws NoSuchParameterException, ResponseStatusException {
        if(opponentId.equals("")) throw new NoSuchParameterException("Parameter 'id' is not exists.");
        if(!service.unfollow(id, opponentId)){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Something is worng.");
        }
        return "redirect:/friend/my-follow-list";
    }
}
