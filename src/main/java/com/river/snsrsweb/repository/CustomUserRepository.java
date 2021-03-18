package com.river.snsrsweb.repository;

import com.river.snsrsweb.domain.User;

import java.util.List;

public interface CustomUserRepository {
    List<User> unFollowList(String phoneNumber);
}
