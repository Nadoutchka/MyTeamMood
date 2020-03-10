//Télécharger un JDBC driver pour PostgreSQL
// Ici, version 42.2.10


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.gson;
import gson.Gson;


//executeQuery() : requête de lecture
//executeUpdate() : requête insert, update ou delete
//CTRL + SHIFT + O pour générer les imports

public class GestionBDD {
    public static Connection connexion = null;
    public static Statement statement = null;
    public static ResultSet resultat = null;
    public static int requete = 0;

    //Méthodes
    public static void connect(){
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
      
      try{
        System.out.println("Connexion a la bdd...");
        connexion = DriverManager.getConnection(url, user, passwd);
        System.out.println("Connexion reussie !");
      } catch (Exception e) {
        //Déconnexion
        if (connexion !=null){
          try {
            connexion.close();
          } catch (SQLException ignore) {}
        }}
    }

    public static void disconnect(){
      try{
        connexion.close();
      }catch (SQLException ignore){}
    }

    public static void requete(){

      try {
      //Création de l'objet gérant les requêtes
      statement = connexion.createStatement();   
        
      //Exécution d'une requête de lecture
      resultat = statement.executeQuery( "SELECT id_collab, nom, prenom, mail  FROM collaborateur;" );

      //Execution d'une requête d'écriture
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
        } 
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
    }

    public static CollaborateurS recuperationCollab(){
      JsonArray listCollab = new CollaborateurS();
      try{
      //Récupération des données du résultat de la requête de lecture
      while ( resultat.next() ) {
      
        listCollab.id_collab = resultat.getInt( "id_collab" );
        listCollab.nom = resultat.getString("nom");
        listCollab.prenom = resultat.getString("prenom");
        listCollab.mail = resultat.getString( "mail" );
        listCollab.addCollab();
      }
      }catch (SQLException ignore) {}
    
      return listCollab;
      }
    public static void main(String[] args) {  
      connect();
      requete();
      
      CollaborateurS listCol;
      listCol = recuperationCollab();
      Gson gsonBuilder = new GsonBuilder().create();
      String jsonListCol = gsonBuilder.toJson(listCol);
      
      System.out.println(jsonListCol);
  }
}  