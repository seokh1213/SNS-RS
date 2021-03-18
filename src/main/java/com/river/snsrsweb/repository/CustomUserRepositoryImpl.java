package com.river.snsrsweb.repository;

import com.river.snsrsweb.domain.User;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import java.util.List;

public class CustomUserRepositoryImpl implements CustomUserRepository{
    @Autowired
    EntityManager entityManager;

    @Override
    public List<User> unFollowList(String phoneNumber) {
        return entityManager.createNativeQuery(
                "SELECT u.ID, u.PHONE_NUMBER, u.PASSWORD " +
                        "FROM USER u " +
                        "WHERE u.PHONE_NUMBER != ?1 AND " +
                        "u.PHONE_NUMBER NOT IN (" +
                            "SELECT us.PHONE_NUMBER " +
                            "FROM USER us, FOLLOWS fw " +
                            "WHERE fw.FOLLOW_ID = us.ID AND " +
                            "fw.USER_ID = ?1" +
                        ")"
                , User.class)
                .setParameter(1,phoneNumber).getResultList();
    }
}
