# OneHundredAndFiftySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftySix } from "@vercel/sdk/models/usereventjobpayloadprovider.js";

let value: OneHundredAndFiftySix = {
  previousRule: {
    email: "Joana_Ondricka@hotmail.com",
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
| `team`                                                                 | [models.UserEventPayload156Team](../models/usereventpayload156team.md) | :heavy_check_mark:                                                     | N/A                                                                    |