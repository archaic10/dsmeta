package com.devsuperior.dsmeta.services;

import java.util.List;
import com.devsuperior.dsmeta.entities.Sale;
import org.springframework.stereotype.Service;
import com.devsuperior.dsmeta.repositories.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	public List<Sale> findSales() {		
		return repository.findAll();
	}
}