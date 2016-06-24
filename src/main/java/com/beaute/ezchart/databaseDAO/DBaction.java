package com.beaute.ezchart.databaseDAO;

import java.util.List;

import com.beaute.ezchart.model.Chart;
import com.beaute.ezchart.model.User;

import javax.persistence.*;

public class DBaction {
	
	public static User GetUserByID( long userID ) {
		EntityManager em = DBUtil.getEmFactory().createEntityManager();
		EntityTransaction trans = em.getTransaction();
		trans.begin();
		try{
			User user = em.find(User.class, userID);
			return user;
		}
		catch (Exception ex )
		{
			System.out.println(ex);
			trans.rollback();
		}
		finally {
			em.close();
		}
		return null;
	}
	public static void insert( User user ) {
		EntityManager em = DBUtil.getEmFactory().createEntityManager();
		EntityTransaction trans = em.getTransaction();
		trans.begin();
		try{
			em.persist( user );
			trans.commit();
		}
		catch (Exception ex )
		{
			System.out.println(ex);
			trans.rollback();
		}
		finally {
			em.close();
		}
	}
	
	public static void update( Chart chart) {
		EntityManager em = DBUtil.getEmFactory().createEntityManager();
		EntityTransaction trans = em.getTransaction();
		trans.begin();
		try
		{
			em.merge( chart );
			trans.commit();
		}
		catch ( Exception ex ){
			System.out.println(ex);
			trans.rollback();
		}
		finally {
			em.close();
		}
	}
	
	public static void  delete(Chart chart) {
		EntityManager em = DBUtil.getEmFactory().createEntityManager();
		EntityTransaction trans = em.getTransaction();
		trans.begin();
		try
		{
			em.remove( em.merge( chart ) );
			trans.commit();
		}
		catch ( Exception ex ){
			System.out.println(ex);
			trans.rollback();
		}
		finally {
			em.close();
		}
	}
	
	public static List<Chart> selectChart( String user) {
		EntityManager em = DBUtil.getEmFactory().createEntityManager();
		String qString = " Select u from Chart u " +
						"Where u.user = :user";
		TypedQuery<Chart> q = em.createQuery(qString, Chart.class);
		
		List<Chart> charts;
		
		try {
			charts = q.getResultList();
			if ( charts == null || charts.isEmpty() )
				charts = null;
			
		}
		finally {
			em.close();
		}
		return charts;
	}
	
	public static boolean chartExists( String user ) {
		List<Chart> u = selectChart(user);
		return u!=null;
	}
}
	