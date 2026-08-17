# OrbUpdate3

How the subscription change is applied to Orb.

## Example Usage

```typescript
import { OrbUpdate3 } from "@vercel/sdk/models/buycreditsop.js";

let value: OrbUpdate3 = {
  appliedAt: "<value>",
  mode: "async",
  status: "succeeded",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `appliedAt`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | The ISO 8601 date-time that the subscription change was applied to Orb.    |
| `mode`                                                                     | [models.BuyCreditsOrbUpdateMode](../models/buycreditsorbupdatemode.md)     | :heavy_check_mark:                                                         | N/A                                                                        |
| `status`                                                                   | [models.BuyCreditsOrbUpdateStatus](../models/buycreditsorbupdatestatus.md) | :heavy_check_mark:                                                         | N/A                                                                        |