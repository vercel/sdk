# FiveHundredAndTwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwentySix } from "@vercel/sdk/models/usereventpayload499next.js";

let value: FiveHundredAndTwentySix = {
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
| `team`                                                                 | [models.UserEventPayload526Team](../models/usereventpayload526team.md) | :heavy_check_mark:                                                     | N/A                                                                    |