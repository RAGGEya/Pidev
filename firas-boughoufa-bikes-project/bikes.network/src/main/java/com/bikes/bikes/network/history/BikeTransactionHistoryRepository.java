package com.bikes.bikes.network.history;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface BikeTransactionHistoryRepository extends JpaRepository<BikeTransactionHistory, Integer> {
    @Query("""
            SELECT
            (COUNT (*) > 0) AS isBorrowed
            FROM BikeTransactionHistory bookTransactionHistory
            WHERE bookTransactionHistory.user.id = :userId
            AND bookTransactionHistory.bike.id = :bookId
            AND bookTransactionHistory.returnApproved = false
            """)
    boolean isAlreadyBorrowedByUser(@Param("bookId") Integer bookId, @Param("userId") Integer userId);

    @Query("""
            SELECT
            (COUNT (*) > 0) AS isBorrowed
            FROM BikeTransactionHistory bookTransactionHistory
            WHERE bookTransactionHistory.bike.id = :bookId
            AND bookTransactionHistory.returnApproved = false
            """)
    boolean isAlreadyBorrowed(@Param("bookId") Integer bookId);

    @Query("""
            SELECT transaction
            FROM BikeTransactionHistory  transaction
            WHERE transaction.user.id = :userId
            AND transaction.bike.id = :bookId
            AND transaction.returned = false
            AND transaction.returnApproved = false
            """)
    Optional<BikeTransactionHistory> findByBookIdAndUserId(@Param("bookId") Integer bookId, @Param("userId") Integer userId);

    @Query("""
            SELECT transaction
            FROM BikeTransactionHistory  transaction
            WHERE transaction.bike.owner.id = :userId
            AND transaction.bike.id = :bookId
            AND transaction.returned = true
            AND transaction.returnApproved = false
            """)
    Optional<BikeTransactionHistory> findByBookIdAndOwnerId(@Param("bookId") Integer bookId, @Param("userId") Integer userId);

    @Query("""
            SELECT history
            FROM BikeTransactionHistory history
            WHERE history.user.id = :userId
            """)
    Page<BikeTransactionHistory> findAllBorrowedBooks(Pageable pageable, Integer userId);
    @Query("""
            SELECT history
            FROM BikeTransactionHistory history
            WHERE history.bike.owner.id = :userId
            """)
    Page<BikeTransactionHistory> findAllReturnedBooks(Pageable pageable, Integer userId);
}
