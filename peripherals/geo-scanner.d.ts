export interface GeoScanner {
  /** Returns stored fuel */
  getFuelLevel(): number;

  /** Returns max stored fuel */
  getFuelMaxLevel(): number;

  /** Returns cost in RF for scan */
  cost(radius: number): number;

  /** Returns data about blocks in radius */
  scan(radius: number): ScanResult[];

  /** Returns cooldown for scanner */
  getScanCooldown(): number;

  /** Returns data about how much ores in current chunk */
  chunkAnalyze(): Record<string, number>;
}

export interface ScanResult {
  x: number;
  y: number;
  z: number;
  name: string;
  tags: string[];
}
