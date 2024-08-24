package com.training.training.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long usrid;
    private String name;
    private String email;
    @OneToMany(cascade = CascadeType.ALL)
    private Set<Goal> Goals;

}
