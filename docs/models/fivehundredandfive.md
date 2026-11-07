# FiveHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFive } from "@vercel/sdk/models/usereventpayload469actortype.js";

let value: FiveHundredAndFive = {
  cadence: "weekly",
  projectIds: [
    "<value 1>",
    "<value 2>",
  ],
  team: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `cadence`                                                              | [models.Cadence](../models/cadence.md)                                 | :heavy_check_mark:                                                     | N/A                                                                    |
| `projectIds`                                                           | *string*[]                                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `team`                                                                 | [models.UserEventPayload505Team](../models/usereventpayload505team.md) | :heavy_check_mark:                                                     | N/A                                                                    |