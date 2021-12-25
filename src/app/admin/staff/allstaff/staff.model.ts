import { formatDate } from "@angular/common";
export class Staff {
  id: number;
  
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
  
  constructor(Personnel) {
    {
      this.id = Personnel.id || this.getRandomID();
      this.nom =Personnel.nom || "";
      this.prenom=Personnel.prenom || "";
      this.email = Personnel.email || "";
      this.role=Personnel.role     || "docteur";
      this.date_naissance =Personnel.date_naissance || "";
      this.lieu_naissance=Personnel.lieu_naissance || "";
      this.situation_matrimoniale=Personnel.situation_matrimoniale || "celibataire";
      this.quartier=Personnel.quartier  || "";
      this.adresse=Personnel.adresse  || "";
      this.nombre_enfant=Personnel.nombre_enfant || "";
      this.statut =Personnel.statut  || "";
      this.phone=Personnel.phone || "";
      this.specialisation=Personnel.specialisation || "";
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
