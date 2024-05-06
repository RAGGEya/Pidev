package com.example.danceescape.DAO.Services.Accomodation;
import com.example.danceescape.DAO.Entities.Accomodation;

import java.sql.Date;
import java.util.List;


public interface AccomodationServiceif {

    public Accomodation addOrUpdateAccomodation(Accomodation ac) ;
    public List<Accomodation> findAll();
    public void deleteAccomodation(Long id);
    public Accomodation findAccomodationById(Long id);
    public List<Accomodation> findAvailableAccomodations(Date date);


}
