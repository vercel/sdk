# EightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyOne } from "@vercel/sdk/models/fiftysix.js";

let value: EightyOne = {
  id: "<id>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `id`                                                 | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `newTeam`                                            | [models.PayloadNewTeam](../models/payloadnewteam.md) | :heavy_minus_sign:                                   | N/A                                                  |
| `oldTeam`                                            | [models.PayloadOldTeam](../models/payloadoldteam.md) | :heavy_minus_sign:                                   | N/A                                                  |