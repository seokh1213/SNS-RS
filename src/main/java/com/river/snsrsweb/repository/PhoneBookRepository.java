package com.river.snsrsweb.repository;

import com.river.snsrsweb.domain.PhoneBook;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PhoneBookRepository extends JpaRepository<PhoneBook, Long> {
    PhoneBook findByUserId(String userId);
}
