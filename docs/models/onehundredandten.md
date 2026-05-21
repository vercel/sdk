# OneHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTen } from "@vercel/sdk/models/usereventpayload80deployment.js";

let value: OneHundredAndTen = {
  team: {
    id: "<id>",
  },
  previousRule: {
    email: "Rosie.Connelly-Reinger4@gmail.com",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `team`                                                                 | [models.UserEventPayload110Team](../models/usereventpayload110team.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousRule`                                                         | [models.PreviousRule](../models/previousrule.md)                       | :heavy_check_mark:                                                     | N/A                                                                    |