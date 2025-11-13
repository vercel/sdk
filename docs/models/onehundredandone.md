# OneHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndOne } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndOne = {
  team: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `team`                                                                 | [models.UserEventPayload101Team](../models/usereventpayload101team.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousRule`                                                         | [models.PreviousRule](../models/previousrule.md)                       | :heavy_minus_sign:                                                     | N/A                                                                    |
| `nextRule`                                                             | [models.NextRule](../models/nextrule.md)                               | :heavy_minus_sign:                                                     | N/A                                                                    |