export interface EnergyDetector {
  /** Returns the current energy which go through the block */
  getTransferRate(): number;

  /** Returns the max rate limit which has been set with `setTransferRateLimit()` */
  getTransferRateLimit(): number;

  /** Set the transfer rate limit */
  setTransferRateLimit(limit: number);
}
