package com.example.danceescape.DAO.Services.Accomodation;
import com.example.danceescape.DAO.Entities.Accomodation;
import com.example.danceescape.DAO.Repositories.AccomodationRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
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
}
