package com.river.snsrsweb.domain;

import lombok.Getter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
public class User {
    @Id
    @Column
    @GeneratedValue
    public Long id;

    @Column
    public String phoneNumber;

    @OneToMany(mappedBy = "userId")
    public List<PhoneBook> phoeBook;

    @ManyToMany
    @JoinTable
    public List<User> follows;

    @ManyToMany
    @JoinTable
    public List<User> followers;
}
