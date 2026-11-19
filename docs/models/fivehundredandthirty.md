# FiveHundredAndThirty

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThirty } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndThirty = {
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
| `team`                                                                 | [models.UserEventPayload530Team](../models/usereventpayload530team.md) | :heavy_check_mark:                                                     | N/A                                                                    |