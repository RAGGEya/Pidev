package com.example.danceescape.DAO.Services.Logistics;

import com.example.danceescape.DAO.Entities.Accomodation;
import com.example.danceescape.DAO.Entities.Logistics;
import com.example.danceescape.DAO.Repositories.LogisticsRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@AllArgsConstructor
public class LogisticsService implements LogisticsServiceif{
    LogisticsRepository repo;

    @Override
    public Logistics addOrUpdateLogistic(Logistics l){
        return repo.save(l);
    }
    @Override
    public List<Logistics> findAll(){
        return repo.findAll();
    }

    @Override
    public Logistics findLogisticsById(Long id){return repo.findById(id).get();}

    @Override

    public void deleteLogistic(Logistics l){
        repo.delete(l);

    }

    
}
