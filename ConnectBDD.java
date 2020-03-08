//Télécharger un JDBC driver pour PostgreSQL
// Ici, version 42.2.10

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Enumeration;
import java.util.Properties;



//executeQuery() : requête de lecture
//executeUpdate() : requête insert, update ou delete
//CTRL + SHIFT + O pour générer les imports

public class ConnectBDD {
    public static void main(String[] args) {  

      //Chargement du driver JDBC     
      try {
        Class.forName("org.postgresql.Driver");
        System.out.println("Driver OK");
      } catch (ClassNotFoundException e){
        System.out.println("Driver introuvable");
      }
      
      //Conexion à PostgreSQL
      String url = "jdbc:postgresql://localhost:5432/MyTeamMood";
      String user = "postgres";
      String passwd = "isima";
      
      Connection connexion = null;
      Statement statement = null;
      ResultSet resultat = null;
      int requete = 0;

      try{
        System.out.println("Connexion a la bdd...");
        connexion = DriverManager.getConnection(url, user, passwd);
        System.out.println("Connexion reussie !");    
        
        //Création de l'objet gérant les requêtes
        statement = connexion.createStatement();   
        
        //Exécution d'une requête de lecture
        resultat = statement.executeQuery( "SELECT id_collab, nom, prenom, mail  FROM collaborateur;" );

    
        //Récupération des données du résultat de la requête de lecture
      while ( resultat.next() ) {
        int idCollab = resultat.getInt( "id_collab" );
        String nomCollab = resultat.getString("nom");
        String prenomCollab = resultat.getString("prenom");
        String email = resultat.getString( "mail" );
        
       // Traiter ici les valeurs récupérées
       System.out.println("Requête de lecture :");
       System.out.println("id_collab = " + idCollab + ", nom = " + nomCollab + ", prenom = " + prenomCollab + ", mail = " + email);
      }

      //Exécution d'une requête 
      // UPDATE/DELETE: requete = nb de lignes ajoutées/supprimées
      // INSERT: requete = 0 si échec, 1 sinon
      requete = statement.executeUpdate( "INSERT INTO collaborateur (id_collab, nom, prenom, mail) VALUES (7, 'Boutadghart', 'Nada', 'nada.boutadghart@etu.uca.fr')");
      if (requete == 1)
        System.out.println("INSERT fait");
      else 
        System.out.println("echec de l'INSERT");

      }catch (Exception e) { 

          //Erreur 
          e.printStackTrace();
          System.out.println("Erreur");
        } finally {
          //Fermeture de resultat
          if (resultat !=null){
            try {
              resultat.close();
            } catch (SQLException ignore) {}
          }

          //Fermetue du statement
          if (statement !=null){
            try {
              statement.close();
            } catch (SQLException ignore) {}
          }

          //Déconnexion
          if (connexion !=null){
            try {
              connexion.close();
            } catch (SQLException ignore) {}
          }
        }
  }
}  