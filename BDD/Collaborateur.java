import java.io.Serializable;

public class Collaborateur implements Serializable{
    public Integer id_collab;
    public String nom;
    public String prenom;
    public String mail;

    public Collaborateur  (int id, String name, String firstname, String email){
        id_collab = id;
        nom = name;
        prenom = firstname;
        mail = email;
    }
}