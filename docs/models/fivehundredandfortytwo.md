# FiveHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFortyTwo } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndFortyTwo = {
  cadence: "weekly",
  projectIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
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
| `team`                                                                 | [models.UserEventPayload542Team](../models/usereventpayload542team.md) | :heavy_check_mark:                                                     | N/A                                                                    |