package com.training.training.Entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CareerResources {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ressourceid;
    private String name;
    private String url;
    private Boolean iscompleted;
    @ManyToOne
    Goal goal;


}
