package com.example.danceescape.DAO.Repositories;

import com.example.danceescape.DAO.Entities.Accomodation;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccomodationRepository extends JpaRepository<Accomodation,Long> {

    List<Accomodation> findByAvailability(boolean b);
}
