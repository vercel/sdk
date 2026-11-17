# FiveHundredAndSeventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndSeventeen } from "@vercel/sdk/models/usereventpayload491previous.js";

let value: FiveHundredAndSeventeen = {
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
| `team`                                                                 | [models.UserEventPayload517Team](../models/usereventpayload517team.md) | :heavy_check_mark:                                                     | N/A                                                                    |