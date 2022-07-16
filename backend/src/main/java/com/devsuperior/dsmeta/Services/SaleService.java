package com.devsuperior.dsmeta.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.Sale;
import com.devsuperior.dsmeta.Repository.SaleRepository;

@Service
public class SaleService {

    @Autowired
    private SaleRepository repository;

    public List<Sale> findSales() {
        return repository.findAll();
    }

}
