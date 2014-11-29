
package sample.jetty.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Users implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	private String personid;

	@Column(nullable = false)
	private String name;

	@Column(nullable = false)
	private String kind;

    public String getPersonid() {
        return personid;
    }

    public void setPersonid(String personid) {
        this.personid = personid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getKind() {
        return kind;
    }

    public void setKind(String kind) {
        this.kind = kind;
    }

    @Override
    public String toString() {
        return "Users{" +
                "id=" + personid +
                ", name='" + name + '\'' +
                ", kind='" + kind + '\'' +
                '}';
    }
}
