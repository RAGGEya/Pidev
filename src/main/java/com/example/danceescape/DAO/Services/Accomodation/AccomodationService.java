package com.example.danceescape.DAO.Services.Accomodation;
import com.example.danceescape.DAO.Entities.Accomodation;
import com.example.danceescape.DAO.Repositories.AccomodationRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
@Service
@AllArgsConstructor

public class AccomodationService implements AccomodationServiceif {
    AccomodationRepository repo;
    @Override
    public Accomodation addOrUpdateAccomodation(Accomodation ac) {
        return repo.save(ac);
    }

    @Override
    public List<Accomodation> findAll() {
        return repo.findAll();
    }
    
    @Override
    public Accomodation findAccomodationById(Long id){return repo.findById(id).get();}

    @Override
    public void deleteAccomodation(Long id) {
        repo.deleteById(id);
    }

    
   @Override
    public List<Accomodation> findAvailableAccomodations(Date date) {
        // Get all accommodations
        List<Accomodation> allAccomodations = repo.findAll();

        // Filter accommodations based on availability and the provided date
        return allAccomodations.stream()
                .filter(accomodation -> accomodation.isAvailability() && isAvailableOnDate(accomodation, date))
                .collect(Collectors.toList());
    }

    // Helper method to check if an accommodation is available on the provided date
    private boolean isAvailableOnDate(Accomodation accomodation, Date date) {
        // Check if the accommodation's bookedFrom and bookedTo dates fall outside the provided date
        return (accomodation.getBookedFrom().compareTo(date) >= 0) &&
               (accomodation.getBookedTo().compareTo(date) <= 0);
    }
}
