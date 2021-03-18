package com.river.snsrsweb.service;

import com.river.snsrsweb.domain.User;
import com.river.snsrsweb.repository.UserRepository;
import org.springframework.aop.framework.AopConfigException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.SessionAttribute;

import java.util.Arrays;
import java.util.List;

@Service
public class AccountService implements UserDetailsService {

    @Autowired
    private UserRepository repository;

    public Boolean join(String phoneNumber){
        if(repository.existsByPhoneNumber(phoneNumber)){
            return false;
        }
        User user= new User();
        user.setPhoneNumber(phoneNumber);
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        user.setPassword(encoder.encode(phoneNumber));
        repository.save(user);
        return true;
    }

    public Boolean login(String phoneNumber){
        return repository.existsByPhoneNumber(phoneNumber);
    }

    public Boolean idUpdate(String phoneNumber, String newPhoneNumber){
        if(!repository.existsByPhoneNumber(phoneNumber)){
            return false;
        }
        if(repository.existsByPhoneNumber(newPhoneNumber)){
            return false;
        }
        User user= repository.findByPhoneNumber(phoneNumber);

        user.setPhoneNumber(newPhoneNumber);
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        user.setPassword(encoder.encode(newPhoneNumber));

        repository.save(user);
        return true;
    }


    @Override
    public UserDetails loadUserByUsername(String phoneNumber) throws UsernameNotFoundException {
        User user = repository.findByPhoneNumber(phoneNumber);
        if(user==null)
            throw new UsernameNotFoundException("존재하지 않는 유저입니다. ("+phoneNumber+")");
        return new org.springframework.security.core.userdetails.User(user.getPhoneNumber(), user.getPassword(), Arrays.asList(new SimpleGrantedAuthority("USER")));
    }
}
