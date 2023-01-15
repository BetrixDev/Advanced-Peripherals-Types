import {
  ARController,
  MEBridge,
  RSBridge,
  EnviromentDetector,
  PlayerDetector,
  EnergyDetector,
  InventoryManager,
  RedstoneIntegrator,
  BlockReader,
  NBTStorage,
  GeoScanner,
  ColonyIntegrator,
  ChatBox,
} from "./peripherals";

declare global {
  /** @noSelf **/
  namespace peripheral {
    function find(peripheralName: "meBridge"): MEBridge | null;
    function find(peripheralName: "rsBridge"): RSBridge | null;
    function find(peripheralName: "arController"): ARController | null;
    function find(peripheralName: "environmentDetector"): EnviromentDetector | null;
    function find(peripheralName: "playerDetector"): PlayerDetector | null;
    function find(peripheralName: "energyDetector"): EnergyDetector | null;
    function find(peripheralName: "inventoryManager"): InventoryManager | null;
    function find(peripheralName: "redstoneIntegrator"): RedstoneIntegrator | null;
    function find(peripheralName: "blockReader"): BlockReader | null;
    function find(peripheralName: "nbtStorage"): NBTStorage | null;
    function find(peripheralName: "geoScanner"): GeoScanner | null;
    function find(peripheralName: "colonyIntegrator"): ColonyIntegrator | null;
    function find(peripheralName: "chatBox"): ChatBox | null;
    function find(peripheralName: string): unknown;
  }
}

export {};
