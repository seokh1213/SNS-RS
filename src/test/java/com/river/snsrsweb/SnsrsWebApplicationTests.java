package com.river.snsrsweb;

import com.river.snsrsweb.domain.PhoneBook;
import com.river.snsrsweb.domain.User;
import com.river.snsrsweb.repository.PhoneBookRepository;
import com.river.snsrsweb.repository.UserRepository;
import com.river.snsrsweb.service.FriendService;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jdbc.EmbeddedDatabaseConnection;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;
import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

@DataJpaTest
@ExtendWith(SpringExtension.class)
@ActiveProfiles("test")
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class SnsrswebApplicationTests {


	@Autowired
	private UserRepository userRepository;
	@Autowired
	private PhoneBookRepository phoneBookRepository;

	private final String FIRST_USER="100";
	private final String SECOND_USER="101";
	private final String PHONE_NUMBER="01012345678";

	@Test
	public void loginSuccess(){
		User user = userRepository.findByPhoneNumber(FIRST_USER);
		assertThat(user.getPhoneNumber(), is(FIRST_USER));
		assertThat(user.getPassword(), is(FIRST_USER));
	}

	@BeforeEach
	public void init(){
		User firstUser=new User();
		firstUser.setPhoneNumber(FIRST_USER);
		firstUser.setPassword(FIRST_USER);

		User secondUser=new User();
		secondUser.setPhoneNumber(SECOND_USER);
		secondUser.setPassword(SECOND_USER);

		PhoneBook phoneBook=new PhoneBook();
		phoneBook.setUser(firstUser);
		phoneBook.setPhoneNumber(PHONE_NUMBER);
		firstUser.getPhoneBooks().add(phoneBook);

		userRepository.save(firstUser);
		userRepository.save(secondUser);
		phoneBookRepository.save(phoneBook);
	}

	@Test
	public void checkJoinPhoneBook(){
		User user=userRepository.findByPhoneNumber(FIRST_USER);
		List<PhoneBook> phoneBooks=user.getPhoneBooks();
		assertThat(phoneBooks, notNullValue());
		assertThat(phoneBooks.size(), is(1));
        boolean isThere=false;
        for(PhoneBook phoneBook: phoneBooks){
			isThere=isThere || phoneBook.getPhoneNumber().equals(PHONE_NUMBER);
		}
        assertThat(isThere, is(true));
		PhoneBook phoneBook=phoneBookRepository.findByUser(user);
		assertThat(phoneBook, notNullValue());
		assertThat(phoneBook.getPhoneNumber(), is(PHONE_NUMBER));
	}

	@Test
	public void followUser(){
		User firstUser=userRepository.findByPhoneNumber(FIRST_USER);
		User secondUser=userRepository.findByPhoneNumber(SECOND_USER);

		List<User> followList = firstUser.getFollows();
		List<User> followerList = secondUser.getFollowers();
		followList.add(secondUser);
		followerList.add(firstUser);
		userRepository.save(firstUser);
		userRepository.save(secondUser);

		firstUser=userRepository.findByPhoneNumber(FIRST_USER);
		secondUser=userRepository.findByPhoneNumber(SECOND_USER);

		assertThat(firstUser.getFollows(), notNullValue());
		assertThat(firstUser.getFollows().size(), is(1));
		assertThat(firstUser.getFollows().get(0).getPhoneNumber(), is(SECOND_USER));

		assertThat(secondUser.getFollowers(), notNullValue());
		assertThat(secondUser.getFollowers().size(), is(1));
		assertThat(secondUser.getFollowers().get(0).getPhoneNumber(), is(FIRST_USER));
	}

	@Test
	public void unfollowUser(){
		User firstUser=userRepository.findByPhoneNumber(FIRST_USER);
		User secondUser=userRepository.findByPhoneNumber(SECOND_USER);

		List<User> followList = firstUser.getFollows();
		List<User> followerList = secondUser.getFollowers();
		followList.remove(secondUser);
		followerList.remove(firstUser);
		userRepository.save(firstUser);
		userRepository.save(secondUser);

		firstUser=userRepository.findByPhoneNumber(FIRST_USER);
		secondUser=userRepository.findByPhoneNumber(SECOND_USER);

		assertThat(firstUser.getFollows(), notNullValue());
		assertThat(firstUser.getFollows().size(), is(0));

		assertThat(secondUser.getFollowers(), notNullValue());
		assertThat(secondUser.getFollowers().size(), is(0));
	}

}
