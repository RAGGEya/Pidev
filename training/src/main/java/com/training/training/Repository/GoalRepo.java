package com.training.training.Repository;

import com.training.training.Entity.CareerResources;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GoalRepo extends JpaRepository<CareerResources, Long> {
}
