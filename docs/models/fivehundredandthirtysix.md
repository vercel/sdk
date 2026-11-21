# FiveHundredAndThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThirtySix } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndThirtySix = {
  cadence: "monthly",
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
| `team`                                                                 | [models.UserEventPayload536Team](../models/usereventpayload536team.md) | :heavy_check_mark:                                                     | N/A                                                                    |