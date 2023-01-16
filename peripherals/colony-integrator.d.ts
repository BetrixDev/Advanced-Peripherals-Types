import { Coordinate } from "./player-detector";

/** @noSelf **/
export interface ColonyIntegrator {
  /** Returns true if the block is in a colony */
  isInColony(): boolean;

  /** Returns true if the given coordinates are in a colony */
  isWithin(position: Coordinate): boolean;

  /** Returns a table with all citizens of the colony */
  getCitizens(): Citizen[];

  /** Returns the id of the colony */
  getColonyID(): number;

  /** Returns the name of the colony */
  getColonyName(): string;

  /** Returns the style of the colony */
  getColonyStyle(): string;

  /** Returns true if the colony is active *(trusted players are online)* */
  isActive(): boolean;

  /** Returns the overall happiness of the colony */
  getHappiness(): number;

  /** Returns the position of the townhall */
  getLocation(): Coordinate;

  /** Returns true if the colony is currently under attack */
  isUnderAttack(): boolean;

  /** Returns the amount of citizens */
  amountOfCitizens(): number;

  /** Returns the possible max amount of citizens */
  maxOfCitizens(): number;

  /** Returns the amount of graves in the colony */
  amountOfGraves(): number;

  /** Returns the amount of currently existing construction sites */
  amountOfConstructionSites(): number;

  /** Returns a table with all visitors in your tavern of the colony */
  getVisitors(): ColonyVisitor[];

  /** Returns a table with all buildings in your colony */
  getBuildings(): ColonyBuilding[];

  /** Returns a table with all work orders */
  getWorkOrders(): ColonyWorkOrder[];

  /** Returns all possible researches, currently researches that is being worked on and research that has already been researched */
  getResearch(): Record<string, ColonyResearch>;

  /** Returns a table with the resources of a work order. You can find out every order and its ID with `getWorkOrders()` */
  getWorkOrderResources(id: number): ColonyBuilderResource[];

  /** Returns all requests in any kind of the colony */
  getRequests(): ColonyRequest[];

  /** Returns the required resources of the given builder's hut */
  getBuilderResources(position: Coordinate): ColonyBuilderResource[];
}

export interface Citizen {
  id: number;
  name: string;
  bedPos: Coordinate;
  children: number[];
  location: Coordinate;
  state: string;
  age: CitizenAge;
  gender: CitizenGender;
  saturation: number;
  happiness: number;
  skills: Record<string, CitizenSkillData>;
  work: CitizenJob | null;
  home: CitizenHome | null;
  betterFood: boolean;
  isAsleep: boolean;
  isIdle: boolean;
  health: number | null;
  maxHealth: number | null;
  armor: number | null;
  toughness: number | null;
}

export interface ColonyVisitor {
  id: number;
  name: string;
  location: Coordinate;
  age: CitizenAge;
  gender: CitizenGender;
  saturation: number;
  happiness: number;
  skills: Record<string, CitizenSkillData>;
  recruitCost: string;
}

export type CitizenAge = "child" | "adult";
export type CitizenGender = "female" | "male";

export interface CitizenSkillData {
  level: number;
  xp: number;
}

export interface CitizenJob {
  location: Coordinate;
  type: string;
  level: number;
  name: string;
}

export interface CitizenHome {
  location: Coordinate;
  type: string;
  level: number;
}

export interface ColonyBuilding {
  location: Coordinate;
  type: string;
  style: string;
  level: number;
  maxLevel: number;
  name: string;
  built: boolean;
  isWorkingOn: boolean;
  priority: number;
  structure: ColonyBuildingStructure;
  citizens: { id: number; name: string }[];
  storageBlocks: number;
  storageSlots: number;
  guarded: boolean;
}

export interface ColonyBuildingStructure {
  cornerA: Coordinate;
  cornderB: Coordinate;
  rotation: number;
  mirror: boolean;
}

export interface ColonyWorkOrder {
  builder: Coordinate;
  changed: boolean;
  id: number;
  priority: number;
  isClaimed: boolean;
  location: Coordinate;
  type: string;
  buildingName: string;
  targetLevel: number;
  workOrderType: string;
}

export interface ColonyResearch {
  id: string;
  name: string;
  researchEffects: string[];
  status: string;
}

export interface ColonyBuilderResource {
  item: string;
  displayName: string;
  available: number;
  status: string;
  needed: number;
}

export interface ColonyRequest {
  id: string;
  name: string;
  desc: string;
  state: string;
  count: number;
  minCount: number;
  items: any;
  target: string;
}
