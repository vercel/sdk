# FiveHundredAndThirtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThirtySeven } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndThirtySeven = {
  cadence: "monthly",
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
| `team`                                                                 | [models.UserEventPayload537Team](../models/usereventpayload537team.md) | :heavy_check_mark:                                                     | N/A                                                                    |