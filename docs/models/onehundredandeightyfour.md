# OneHundredAndEightyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyFour } from "@vercel/sdk/models/usereventjobpayload137gitcomments.js";

let value: OneHundredAndEightyFour = {
  team: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `nextRule`                                                             | [models.NextRule](../models/nextrule.md)                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `previousRule`                                                         | [models.PayloadPreviousRule](../models/payloadpreviousrule.md)         | :heavy_minus_sign:                                                     | N/A                                                                    |
| `team`                                                                 | [models.UserEventPayload184Team](../models/usereventpayload184team.md) | :heavy_check_mark:                                                     | N/A                                                                    |