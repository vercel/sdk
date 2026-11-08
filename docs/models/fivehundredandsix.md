# FiveHundredAndSix

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndSix } from "@vercel/sdk/models/usereventpayload470actortype.js";

let value: FiveHundredAndSix = {
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
| `team`                                                                 | [models.UserEventPayload506Team](../models/usereventpayload506team.md) | :heavy_check_mark:                                                     | N/A                                                                    |