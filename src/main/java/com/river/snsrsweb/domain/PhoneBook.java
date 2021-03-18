package com.river.snsrsweb.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class PhoneBook {
    @Id
    @GeneratedValue
    private Long id;

    private String phoneNumber;

    @ManyToOne
    private User user;
}