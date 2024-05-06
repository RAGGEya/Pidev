package com.firaspi.ecoomercejury.DAO.Repoitories;

import com.firaspi.ecoomercejury.DAO.Entities.Jury;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface JuryRepo extends JpaRepository<Jury,Long> {



}
