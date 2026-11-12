# FiveHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTen } from "@vercel/sdk/models/usereventpayload474actortype.js";

let value: FiveHundredAndTen = {
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
| `team`                                                                 | [models.UserEventPayload510Team](../models/usereventpayload510team.md) | :heavy_check_mark:                                                     | N/A                                                                    |