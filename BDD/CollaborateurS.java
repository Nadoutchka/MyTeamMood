import java.util.ArrayList;
import java.util.List;
import java.util.Vector;

public class CollaborateurS{

    public int id_collab;
    public String nom;
    public String prenom;
    public String mail;
   
    public Vector<Collaborateur> listCollaborateur;

    public CollaborateurS()
    {
        listCollaborateur = new Vector<Collaborateur>();
    }

    public void addCollab(){
        listCollaborateur.add(new Collaborateur(id_collab, nom, prenom, mail));
    }
    
}