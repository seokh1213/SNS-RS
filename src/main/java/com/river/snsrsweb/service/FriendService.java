package com.river.snsrsweb.service;

import com.river.snsrsweb.domain.User;
import com.river.snsrsweb.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FriendService {
    @Autowired
    UserRepository repository;

    public Boolean follow(String id, String opponentId) {
        if (!repository.existsByPhoneNumber(id)) {
            return false;
        }
        if (!repository.existsByPhoneNumber(opponentId)) {
            return false;
        }

        User user = repository.findByPhoneNumber(id);
        User opponent = repository.findByPhoneNumber(opponentId);
        List<User> followList = user.getFollows();
        List<User> followerList = opponent.getFollowers();
        followList.add(opponent);
        followerList.add(user);
        repository.save(user);
        repository.save(opponent);
        return true;
    }

    public Boolean unfollow(String id, String opponentId) {
        if (!repository.existsByPhoneNumber(id)) {
            return false;
        }
        if (!repository.existsByPhoneNumber(opponentId)) {
            return false;
        }
        User user = repository.findByPhoneNumber(id);
        User opponent = repository.findByPhoneNumber(opponentId);
        List<User> followList = user.getFollows();
        List<User> followerList = opponent.getFollowers();
        followList.remove(opponent);
        followerList.remove(user);
        repository.save(user);
        repository.save(opponent);
        return true;
    }

    public List<User> followList(String id) {
        if (!repository.existsByPhoneNumber(id)) {
            return null;
        }
        User user = repository.findByPhoneNumber(id);
        return user.getFollows();
    }

    public List<User> unfollowList(String id) {
        if (!repository.existsByPhoneNumber(id)) {
            return null;
        }
        return repository.unFollowList(id);

    }

}