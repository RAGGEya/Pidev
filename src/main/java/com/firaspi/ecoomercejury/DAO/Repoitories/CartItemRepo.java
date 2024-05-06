package com.firaspi.ecoomercejury.DAO.Repoitories;

import com.firaspi.ecoomercejury.DAO.Entities.CartItem;
import com.firaspi.ecoomercejury.DAO.Entities.Product;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CartItemRepo extends JpaRepository<CartItem, Long> {
    CartItem findByCartCartIdAndProductId(Long cartId, Long productId);

    @Query("SELECT ci.product FROM CartItem ci WHERE ci.cart.cartId = :cartId")
    List<Product> findProductsByCartId(Long cartId);
    @Transactional
    void deleteByProductId(Long productId);
}
