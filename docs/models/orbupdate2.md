# OrbUpdate2

How the subscription change is applied to Orb.

## Example Usage

```typescript
import { OrbUpdate2 } from "@vercel/sdk/models/buycreditsop.js";

let value: OrbUpdate2 = {
  mode: "async",
  status: "canceled",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `mode`                                                 | [models.OrbUpdateMode](../models/orbupdatemode.md)     | :heavy_check_mark:                                     | N/A                                                    |
| `status`                                               | [models.OrbUpdateStatus](../models/orbupdatestatus.md) | :heavy_check_mark:                                     | N/A                                                    |