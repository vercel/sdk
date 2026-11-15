# FiveHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwelve } from "@vercel/sdk/models/fourhundredandeightyseven.js";

let value: FiveHundredAndTwelve = {
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
| `team`                                                                 | [models.UserEventPayload512Team](../models/usereventpayload512team.md) | :heavy_check_mark:                                                     | N/A                                                                    |