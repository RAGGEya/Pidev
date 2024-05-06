package com.firaspi.ecoomercejury.DAO.Repoitories;

import com.firaspi.ecoomercejury.DAO.Entities.AddToCartRequest;
import com.firaspi.ecoomercejury.DAO.Entities.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReqRepo extends JpaRepository<AddToCartRequest, Long> {
    List<AddToCartRequest> findByCart(Cart cart);
}
