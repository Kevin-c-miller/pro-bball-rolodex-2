export interface PlayerInformation {
  first_name: string;
  last_name: string;
  position: string;
  height_feet: number;
  height_inches: number;
  id: number;
  weight_pounds: number;
  team: {
    full_name: string;
    id: number;
  };
}
