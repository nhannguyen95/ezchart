package com.beaute.ezchart.databaseDAO;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.beaute.ezchart.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
	
	
	/*@Query(value = "select * from ... where column1 = :param1", nativeQuery = true)
	User complicatedQuery(@Param("param1") String param1);*/

}
