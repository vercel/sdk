# OneHundredAndSeventyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyThree } from "@vercel/sdk/models/payloadinitiator.js";

let value: OneHundredAndSeventyThree = {
  previousRule: {
    email: "Estevan52@yahoo.com",
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
| `team`                                                                 | [models.UserEventPayload173Team](../models/usereventpayload173team.md) | :heavy_check_mark:                                                     | N/A                                                                    |