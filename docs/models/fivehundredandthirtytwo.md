# FiveHundredAndThirtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThirtyTwo } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndThirtyTwo = {
  cadence: "weekly",
  projectIds: [],
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
| `team`                                                                 | [models.UserEventPayload532Team](../models/usereventpayload532team.md) | :heavy_check_mark:                                                     | N/A                                                                    |