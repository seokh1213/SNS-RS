package com.river.snsrsweb.repository;

import com.river.snsrsweb.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByPhoneNumber(String phoneNumber);

    Boolean existsByPhoneNumber(String phoneNumber);

    // unfollow list
    @Query(value =
            "SELECT * " +
            "FROM user u " +
            "WHERE u.phone_number!=?1 AND u.id NOT IN( " +
                    "SELECT fw.follow_id " +
                    "FROM user us, follows fw " +
                    "WHERE fw.user_id=us.id AND us.phone_number=?1 " +
            ")"
            ,nativeQuery = true
    )
    List<User> unFollowList(String phoneNumber);
}
