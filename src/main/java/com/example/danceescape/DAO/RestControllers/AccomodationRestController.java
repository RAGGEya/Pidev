package com.example.danceescape.DAO.RestControllers;
import com.example.danceescape.DAO.Entities.Accomodation;
import com.example.danceescape.DAO.Services.Accomodation.AccomodationServiceif;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/Crud/Accomodation")
@AllArgsConstructor
public class AccomodationRestController {
    AccomodationServiceif serviceif;
    @PostMapping("addOrUpdateAccomodation")
    Accomodation addOrUpdateAccomodation(@RequestBody Accomodation ac){
        return serviceif.addOrUpdateAccomodation(ac);
    }
    
    
    @GetMapping("findAll")
    List<Accomodation> findAll(){ return serviceif.findAll();}

    @GetMapping("findAccomodationById")
    public Accomodation findAccomodationById (@RequestParam long id) {return serviceif.findAccomodationById(id);}

    @DeleteMapping("deleteAccomodation")
    void deleteAccomodation(@RequestParam Long id){ serviceif.deleteAccomodation(id);}

    @GetMapping("findAvailableAccomodations")
    List<Accomodation> findAvailableAccomodations(Date date) {
        return serviceif.findAvailableAccomodations(date);
    }

}
