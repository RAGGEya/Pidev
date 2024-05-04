package com.example.danceescape.DAO.Repositories;

import com.example.danceescape.DAO.Entities.Logistics;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LogisticsRepository extends JpaRepository<Logistics,Long> {
    
}
