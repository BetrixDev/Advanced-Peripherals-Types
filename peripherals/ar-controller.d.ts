/** Removed in 1.19+ */
export interface ARController {
  /** Clears the entire canvas */
  clear(): void;

  /** Clears the element with that id */
  clearElement(id: string): void;

  /** The same as `drawString()`, but centers the string horizontally around the specified position */
  drawCenteredString(text: string, x: number, y: number, color: number): void;

  /** The same as `drawCenteredString()`, but has an id so it can be overridden later on or can be completely cleared */
  drawCenteredStringWithId(id: string, text: string, x: number, y: number, color: number): void;

  /** Draws a circle without filling it */
  drawCircle(x: number, y: number, radius: number, color: number): void;

  /** The same as `drawCircle()`, but has an id so it can be overridden later on or can be completely cleared */
  drawCircleWithId(id: string, x: number, y: number, radius: number, color: number): void;

  /** Draws the given item to the specified position */
  drawItemIcon(itemId: string, x: number, y: number): void;

  /** The same as `drawItemIcon()`, but has an id so it can be overridden later on or can be completely cleared */
  drawItemIconWithId(id: string, itemId: string, x: number, y: number): void;

  /** The same as `drawString()`, but the string is positioned with its right end at the specified position */
  drawRightboundString(text: string, x: number, y: number, color: number): void;

  /** The same as `drawRightboundString()`, but has an id so it can be overridden later on or can be completely cleared */
  drawRightboundStringWithId(id: string, text: string, x: number, y: number, color: number): void;

  /** Draws the given string to the specified position and the specified color */
  drawString(text: string, x: number, y: number, color: number): void;

  /** The same as `drawString()`, but has an id so it can be overridden later on or can be completely cleared */
  drawStringWithId(id: string, text: string, x: number, y: number, color: number): void;

  /** Fills a rectangle with the given color from the corner minX, minY to maxX, maxY */
  fill(minX: number, minY: number, maxX: number, maxY: number, color: number): void;

  /** The same as `fill()`, but has an id so it can be overridden later on or can be completely cleared */
  fillWithId(
    id: string,
    minX: number,
    minY: number,
    maxX: number,
    maxY: number,
    color: number
  ): void;

  /** Draws a full circle */
  fillCircle(x: number, y: number, radius: number, color: number): void;

  /** The same as `fillCircle()`, but has an id so it can be overridden later on or can be completely cleared */
  fillCircleWithId(id: string, x: number, y: number, radius: number, color: number): void;

  /** Draws a rectangular gradient from colorFrom to colorTo with the given corners */
  fillGradient(
    minX: number,
    minY: number,
    maxX: number,
    maxY: number,
    colorFrom: number,
    colorTo: number
  ): void;

  /** The same as `fillGradient()`, but has an id so it can be overridden later on or can be completely cleared */
  fillGradientWithId(
    id: string,
    minX: number,
    minY: number,
    maxX: number,
    maxY: number,
    colorFrom: number,
    colorTo: number
  ): void;

  /** Draws a horizontal line in the given color from minX to maxX at vertical y */
  horizontalLine(minX: number, maxX: number, y: number, color: number): void;

  /** The same as `horizontalLine()`, but has an id so it can be overridden later on or can be completely cleared */
  horizontalLineWithId(id: string, minX: number, maxX: number, y: number, color: number): void;

  /** Draws a vertical line in the given color from minY to maxY at horizontal x */
  verticalLine(x: number, minY: number, maxY: number, color: number): void;

  /** The same as `verticalLine()`, but has an id so it can be overridden later on or can be completely cleared */
  verticalLineWithId(id: number, x: number, minY: number, maxY: number, color: number): void;

  /** Returns true and the size of the virtual screen if relative mode is active, or just false if it isn't */
  isRelativeMode(): [true, number, number] | [false];

  /** Activates or deactivates relative mode. Requires virtual screen width and height if it's being enabled. */
  setRelativeMode(enabled: boolean, virtualScreenSize: [width: number, height: number]);
}
