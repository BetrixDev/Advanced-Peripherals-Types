/** @noSelf **/
export interface RedstoneIntegrator {
  /** Returns `true` if the redstone at the given side is on; `false` if not */
  getInput(direction: string): boolean;

  /** Returns `true` if the Redstone Integrator sends a redstone signal to the given side; `false` if not */
  getOuput(direction: string): boolean;

  /** Returns the redstone level on the given side */
  getAnalogInput(direction: string): number;

  /** Returns the redstone level which sends the Redstone Integrator on the given side */
  getAnalogOutput(direction: string): boolean;

  /** Will set the redstone level to 15 on the given side if power is `true` */
  setOutput(direction: string, power: boolean): void;

  /** Will set the redstone level to the given power on the given side */
  setAnalogOutput(direction: string, power: number): void;
}
