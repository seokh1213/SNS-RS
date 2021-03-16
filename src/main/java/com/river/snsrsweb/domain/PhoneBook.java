package com.river.snsrsweb.domain;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class PhoneBook {
    @Id
    @Column
    @GeneratedValue
    public Long id;

    @Column
    public String phoneNumber;

    @ManyToOne
    public User userId;
}