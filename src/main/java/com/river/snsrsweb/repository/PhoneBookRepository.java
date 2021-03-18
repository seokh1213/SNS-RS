package com.river.snsrsweb.repository;

import com.river.snsrsweb.domain.PhoneBook;
import com.river.snsrsweb.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PhoneBookRepository extends JpaRepository<PhoneBook, Long> {
    PhoneBook findByUserId(User userId);
}
