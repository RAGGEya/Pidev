package com.firaspi.ecoomercejury.DAO.Repoitories;

import com.firaspi.ecoomercejury.DAO.Entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo extends JpaRepository<Category, Long> {

}
