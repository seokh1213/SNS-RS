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
    @Query(value="SELECT * FROM USER u WHERE u.PHONE_NUMBER!=?1 AND u.PHONE_NUMBER NOT IN (SELECT us.PHONE_NUMBER FROM USER us, FOLLOWS fw WHERE fw.follow_id=us.id AND fw.user_id=?1)", nativeQuery = true)
    List<User> unFollowList(String phoneNumber);

}
