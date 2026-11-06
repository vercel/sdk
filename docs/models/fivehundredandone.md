# FiveHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndOne } from "@vercel/sdk/models/usereventpayload465actortype.js";

let value: FiveHundredAndOne = {
  cadence: "monthly",
  projectIds: [
    "<value 1>",
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
| `team`                                                                 | [models.UserEventPayload501Team](../models/usereventpayload501team.md) | :heavy_check_mark:                                                     | N/A                                                                    |