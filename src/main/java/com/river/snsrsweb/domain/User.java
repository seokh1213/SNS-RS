package com.river.snsrsweb.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue
    private Long id;

    private String phoneNumber;

    private String password;

    @OneToMany(mappedBy = "userId")
    private List<PhoneBook> phoeBook;

    @ManyToMany
    @JoinTable(
            name="FOLLOWS",
            joinColumns = @JoinColumn(name="user_id"),
            inverseJoinColumns = @JoinColumn(name="follow_id")
    )
    private List<User> follows;

    @ManyToMany(mappedBy = "follows")
    private List<User> followers;
}
