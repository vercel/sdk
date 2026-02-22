# OneHundredAndSixtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyTwo } from "@vercel/sdk/models/projectanalytics.js";

let value: OneHundredAndSixtyTwo = {
  team: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `team`                                                                 | [models.UserEventPayload162Team](../models/usereventpayload162team.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousRule`                                                         | [models.PreviousRule](../models/previousrule.md)                       | :heavy_minus_sign:                                                     | N/A                                                                    |
| `nextRule`                                                             | [models.NextRule](../models/nextrule.md)                               | :heavy_minus_sign:                                                     | N/A                                                                    |