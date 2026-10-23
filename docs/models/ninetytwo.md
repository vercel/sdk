# NinetyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyTwo } from "@vercel/sdk/models/eightytwo.js";

let value: NinetyTwo = {
  id: "<id>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `id`                                                 | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `newTeam`                                            | [models.PayloadNewTeam](../models/payloadnewteam.md) | :heavy_minus_sign:                                   | N/A                                                  |
| `oldTeam`                                            | [models.PayloadOldTeam](../models/payloadoldteam.md) | :heavy_minus_sign:                                   | N/A                                                  |