package com.beaute.ezchart.databaseDAO;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.beaute.ezchart.model.Chart;
@Repository
public interface ChartRepository extends CrudRepository<Chart, Long>{

}
