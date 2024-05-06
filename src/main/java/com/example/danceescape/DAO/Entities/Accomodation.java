package com.example.danceescape.DAO.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "Accomodation")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Accomodation implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long AccomodationId;
    String name;
    String location;
    double price;
    boolean availability;
    @Temporal(TemporalType.DATE)
    Date bookedFrom;
    @Temporal(TemporalType.DATE)
    Date bookedTo;
    @JsonIgnore
    @ManyToOne
    Logistics logistic ;

}
