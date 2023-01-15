export interface PlayerDetector {
  /**
   * Returns player's position
   *
   * Pass `true` into the generic if you have `morePlayerInformation` set to true in the mod's config
   *
   * Pass `false` into the generic if you have `morePlayerInformation` set to false in the mod's config
   *  */
  getPlayerPos<MoreInfo extends boolean>(
    playerName: string
  ): MoreInfo extends true ? MorePlayerInformation : Coordinate;

  /** Returns an array of the names of the players current online */
  getOnlinePlayers(): string[];

  /** Returns an array of the names of the players inside the defined radius from the detector */
  getPlayersInRange(range: number): string[];

  /** Return players within 2 positions */
  getPlayersInCoords(pos1: Coordinate, pos2: Coordinate): string[];

  /** Return players within a certain range. You can define the range in every 3 axes */
  getPlayersInCubic(x: number, y: number, z: number): string[];

  isPlayerInRange(range: number, username: string): boolean;

  isPlayerInCoords(pos1: Coordinate, pos2: Coordinate, username: string): boolean;

  isPlayerInCubic(x: number, y: number, z: number, username: string): boolean;

  /** Similar to `getPlayersInRange`, but doesn't return specific players in the range */
  isPlayersInRange(range: numer): boolean;

  /** Similar to `getPlayersInCoords`, but doesn't return specific players in the coords */
  isPlayersInCoords(pos1: Coordinate, pos2: Coordinate): boolean;

  /** Similar to `getPlayersInCubic`, but doesn't return specific players in the cubic */
  isPlayersInCubic(x: number, y: number, z: number): boolean;
}

export interface Coordinate {
  x: number;
  y: number;
  z: number;
}

/** Returned by `PlayerDetector.getPlayerPos()` is `morePlayerInformation` is set to `true` in the mod's config */
export interface MorePlayerInformation extends Coordinate {
  yaw: number;
  pitch: number;
  dimension: string;
  eyeHeight: number;
}
