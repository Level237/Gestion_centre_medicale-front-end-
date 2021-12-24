import { formatDate } from "@angular/common";
export class Staff {
  id: number;
  img: string;
  nom: string;
  prenom:string;
  email:string;
  role:string;
  date_naissance:string;
  lieu_naissance:string;
  situation_matrimoniale:string;
  quartier:string;
  adresse:string;
  nombre_enfant:number;
  statut:string;
  specialisation;
  phone: string;
  age:string;
  constructor(staff) {
    {
      this.id = staff.id || this.getRandomID();
      this.img = staff.avatar || "assets/images/user/user1.jpg";
      this.nom =staff.nom || "";
      this.prenom=staff.prenom || "";
      this.email = staff.email || "";
      this.role=staff.role     || "docteur";
      this.date_naissance =staff.date_naissance || "";
      this.lieu_naissance=staff.lieu_naissance || "";
      this.situation_matrimoniale=staf.situation_matrimoniale || "celibataire";
      this.quartier=staff.quartier  || "";
      this.adresse=staff.adresse  || "";
      this.nombre_enfant=staff.nombre_enfant || "";
      this.statut =staff.statut  || "";
      this.phone=staff.phone || "";
      this.age=staff.age || "";
      this.specialisation=staff.specialisation || "";
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
