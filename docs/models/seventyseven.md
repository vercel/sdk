# SeventySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventySeven } from "@vercel/sdk/models/retention.js";

let value: SeventySeven = {
  id: "<id>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `id`                                                 | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `newTeam`                                            | [models.PayloadNewTeam](../models/payloadnewteam.md) | :heavy_minus_sign:                                   | N/A                                                  |
| `oldTeam`                                            | [models.PayloadOldTeam](../models/payloadoldteam.md) | :heavy_minus_sign:                                   | N/A                                                  |