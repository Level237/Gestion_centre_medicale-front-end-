import { formatDate } from "@angular/common";
export class Doctors {
  id: number;
  img: string;
  nom: string;
  prenom:string;
  email: string;
  role:string;
  date_naissance: string;
  lieu_naissance:string;
  situation_matrimoniale:string;
  quartier:string;
  adresse:string;
  nombre_enfant:number;
  statut:string;
  specialisation;
  phone: string;
  age:string;
  constructor(doctors) {
    {
      this.id = doctors.id || this.getRandomID();
      this.img = doctors.avatar || "assets/images/user/user1.jpg";
      this.nom = doctors.nom || "";
      this.prenom=doctors.prenom || "";
      this.email = doctors.email || "";
      this.role=doctors.role     || "docteur";
      this.date_naissance = doctors.date_naissance || "";
      this.lieu_naissance= doctors.lieu_naissance || "";
      this.situation_matrimoniale=doctors.situation_matrimoniale || "celibataire";
      this.quartier=doctors.quartier  || "";
      this.adresse=doctors.adresse  || "";
      this.nombre_enfant=doctors.nombre_enfant || "";
      this.statut = doctors.statut  || "";
      this.phone=doctors.phone || "";
      this.age=doctors.age || "";
      this.specialisation=doctors.specialisation || "";
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
