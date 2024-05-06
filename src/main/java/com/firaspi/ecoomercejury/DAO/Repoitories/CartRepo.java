package com.firaspi.ecoomercejury.DAO.Repoitories;

import com.firaspi.ecoomercejury.DAO.Entities.AddToCartRequest;
import com.firaspi.ecoomercejury.DAO.Entities.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CartRepo extends JpaRepository<Cart,Long> {
   // Cart findByCustIdAndProductId(Long custId, Long productId);
   Optional<Cart> findByCustId(Long custId);

}
