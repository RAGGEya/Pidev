package com.example.danceescape.DAO.RestControllers;
import com.example.danceescape.DAO.Entities.Accomodation;
import com.example.danceescape.DAO.Entities.Logistics;
import com.example.danceescape.DAO.Services.Logistics.LogisticsServiceif;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("Crud/Logistics")
@AllArgsConstructor
public class LogisticsRestController {
    LogisticsServiceif serviceif;
    @PostMapping("addOrUpdateLogistics")
    Logistics addOrUpdateLogistics(@RequestBody Logistics l){
        return serviceif.addOrUpdateLogistic(l);
    }
    
    
    @GetMapping("findAll")
    List<Logistics> findAll(){ return serviceif.findAll();}

    @DeleteMapping("deleteLogitics")
    void deleteLogistic(@RequestBody Logistics l){ serviceif.deleteLogistic(l);}

    @GetMapping("findLogisticsById")
    public Logistics findLogisticsById (@RequestParam long id) {return serviceif.findLogisticsById(id);}
}
