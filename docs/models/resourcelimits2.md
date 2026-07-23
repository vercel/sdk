# ResourceLimits2

Overrides for a ramp (slew-rate) admission limit, which bounds how quickly the allowed rate may change over time rather than capping a fixed quantity. All three are expressed in units per minute. - `minRate`: the floor the allowed rate never drops below. Also the cold-start rate a new or idle consumer begins at. - `maxRate`: the ceiling the allowed rate may climb to. - `stepPerMinute`: how much the allowed rate moves per minute of activity — the slope at which it ramps up toward `maxRate` (and, where supported, decays back down toward `minRate`).

## Example Usage

```typescript
import { ResourceLimits2 } from "@vercel/sdk/models/usereventpayload140newenvvartype.js";

let value: ResourceLimits2 = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `minRate`          | *number*           | :heavy_minus_sign: | N/A                |
| `maxRate`          | *number*           | :heavy_minus_sign: | N/A                |
| `stepPerMinute`    | *number*           | :heavy_minus_sign: | N/A                |