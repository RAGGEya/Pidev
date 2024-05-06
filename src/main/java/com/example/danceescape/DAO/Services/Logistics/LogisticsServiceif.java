package com.example.danceescape.DAO.Services.Logistics;

import java.util.List;

import com.example.danceescape.DAO.Entities.Logistics;

public interface LogisticsServiceif {

    public Logistics addOrUpdateLogistic(Logistics l) ;
    public List<Logistics> findAll();
    public void deleteLogistic(Logistics l);
    public Logistics findLogisticsById(Long id);
}
    

