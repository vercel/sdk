# OneHundredAndSixtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyFour } from "@vercel/sdk/models/usereventjobaction.js";

let value: OneHundredAndSixtyFour = {
  previousRule: {
    email: "Terrence.Wisozk@yahoo.com",
  },
  team: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `previousRule`                                                         | [models.PreviousRule](../models/previousrule.md)                       | :heavy_check_mark:                                                     | N/A                                                                    |
| `team`                                                                 | [models.UserEventPayload164Team](../models/usereventpayload164team.md) | :heavy_check_mark:                                                     | N/A                                                                    |