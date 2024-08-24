package com.training.training.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Goal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ressourceid;
    private String name;
    private String description;
    @Enumerated
    private Status Status;
    private LocalDate lastUpdated;
    private LocalDate LocalDate;
    @OneToMany(cascade = CascadeType.ALL, mappedBy="goal")
    private Set<CareerResources> CareerResourcess;


}
