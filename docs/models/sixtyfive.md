# SixtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyFive } from "@vercel/sdk/models/payload1.js";

let value: SixtyFive = {
  id: "<id>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `id`                                                 | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `oldTeam`                                            | [models.PayloadOldTeam](../models/payloadoldteam.md) | :heavy_minus_sign:                                   | N/A                                                  |
| `newTeam`                                            | [models.PayloadNewTeam](../models/payloadnewteam.md) | :heavy_minus_sign:                                   | N/A                                                  |