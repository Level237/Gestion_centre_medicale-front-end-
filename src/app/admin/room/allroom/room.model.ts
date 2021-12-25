import { formatDate } from "@angular/common";
export class Room {
  id: number;
  img: string;
  name: string;
  type: string;
  description: string;
  statut: string;
  constructor(room) {
    {
      this.id = room.id || this.getRandomID();
      this.img = room.avatar || "assets/images/user/user1.jpg";
      this.name = room.name || "";
      this.type = room.type || "";
      this.description = room.description || "";
      this.statut = room.statut || "";
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
