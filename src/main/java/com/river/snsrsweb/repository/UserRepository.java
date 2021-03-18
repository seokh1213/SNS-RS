package com.river.snsrsweb.repository;

import com.river.snsrsweb.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
//public interface UserRepository extends JpaRepository<User, Long>, CustomUserRepository {
public interface UserRepository extends JpaRepository<User, Long> {
    User findByPhoneNumber(String phoneNumber);

    Boolean existsByPhoneNumber(String phoneNumber);

    // unfollow list
    @Query(value="SELECT * FROM user u WHERE u.phone_number!=?1 AND u.phone_number NOT IN (SELECT us.phone_number FROM user us, follows fw WHERE fw.follow_id=us.id AND fw.user_id=?1)", nativeQuery = true)
    List<User> unFollowList(String phoneNumber);

}
