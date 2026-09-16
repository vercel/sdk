# OneHundredAndFortyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyEight } from "@vercel/sdk/models/onehundredandfortyeight.js";

let value: OneHundredAndFortyEight = {
  previousRule: {
    email: "Catharine.Jast@gmail.com",
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
| `team`                                                                 | [models.UserEventPayload148Team](../models/usereventpayload148team.md) | :heavy_check_mark:                                                     | N/A                                                                    |