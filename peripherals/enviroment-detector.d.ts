export interface EnviromentDetector {
  /** Returns the biome the block is in */
  getBiome(): string;

  /** Returns the light level of the block (can be manipulated with light sources) */
  getBlockLightLevel(): number;

  /** Returns the day light level of the current world from 0 to 15 (like the day light sensor) */
  getDayLightLevel(): number;

  /** Returns the name of the dimension (ex. the_nether) */
  getDimensionName(): string;

  /** Returns the name with the provider of the dimension (ex. minecraft:overworld) */
  getDimensionPaN(): string;

  /** Returns the provider of the dimension (ex. minecraft) */
  getDimensionProvider(): string;

  /** Returns the current moon phase as id (ex. 2) */
  getMoonId(): number;

  /** Returns the current moon phase as name (ex. Third quarter) */
  getMoonName(): MoonPhaseName;

  /** Returns the sky light level above the block */
  getSkyLightLevel(): number;

  /** **[WIP]** Returns the daytime of the current world */
  getTime(): number;

  /** Returns the radiation of mekanism with the current unit */
  getRadiation(): ?MekinismRadiation;

  /** Returns the raw radiation in Sv/h */
  getRadiationRaw(): number;

  /** Returns true if the current dimension matches the first parameter */
  isDimension(dimension: string): boolean;

  /** Returns true if the current moon phase matches the first parameter (ex. 0 = Full moon) */
  isMoon(moonPhase: number): boolean;

  /** Returns true if it's raining */
  isRaining(): boolean;

  /** Returns true if the chunk is a slime chunk */
  isSlimeChunk(): boolean;

  /** Returns true if it's sunny */
  isSunny(): boolean;

  /** Returns true if it's thundering */
  isThunder(): boolean;

  /** Returns a table with all registered dimensions(also modded dimensions) */
  listDimensions(): string[];
}

export type MekinismRadiation = {
  radiation: number;
  unit: number;
};

export type MoonPhaseName =
  | "Full moon"
  | "Waning gibbous"
  | "Third quarter"
  | "Wanning crescent"
  | "New moon"
  | "First quarter"
  | "Waxing gibbous";
