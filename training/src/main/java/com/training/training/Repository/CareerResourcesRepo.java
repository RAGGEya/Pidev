package com.training.training.Repository;

import com.training.training.Entity.Goal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CareerResourcesRepo extends JpaRepository<Goal, Long> {
}
