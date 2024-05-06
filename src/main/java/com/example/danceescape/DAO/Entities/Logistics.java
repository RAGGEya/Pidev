package com.example.danceescape.DAO.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Logistics")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)

public class Logistics {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long LogisticsId;
    String name;
    String type;
    
    @OneToMany(mappedBy = "logistic")
    List<Accomodation> accomodation = new ArrayList<>();
@JsonIgnore
    @ManyToMany
    private List<Event> events;
}
