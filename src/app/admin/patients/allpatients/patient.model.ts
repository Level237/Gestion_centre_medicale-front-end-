export class Patient {
  id: number;
  img: string;
  name: string;
  sexe: string;
  date_naissance:string;
  age:string;
  lieu_naissance:string;
  groupe_sanguin: string;
  rhesus:string;
  ville:string;
  quartier:string;
  adresse:string;
  number:string;
  created_at:string;
  constructor(patient) {
    {
      this.id = patient.id || this.getRandomID();
      this.img = patient.avatar || "assets/images/user/user2.jpg";
      this.name = patient.name || "";
      this.sexe = patient.sexe || "male";
      this.date_naissance=patient.date_naissance || "";
      this.age=patient.age || "";
      this.lieu_naissance=patient.lieu_naissance || "";
      this.groupe_sanguin=patient.groupe_sanguin  || "AB";
      this.rhesus=patient.rhesus || "Positif";
      this.ville=patient.ville || "douala";
      this.quartier=patient.quartier || "";
      this.adresse=patient.adresse || "";
      this.number=patient.number    || "";
      this.created_at=patient.created_at;
    }
  }
  public getRandomID(): string {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
