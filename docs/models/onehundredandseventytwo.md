# OneHundredAndSeventyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyTwo } from "@vercel/sdk/models/payloadinitiator.js";

let value: OneHundredAndSeventyTwo = {
  previousRule: {
    email: "Yasmin91@yahoo.com",
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
| `team`                                                                 | [models.UserEventPayload172Team](../models/usereventpayload172team.md) | :heavy_check_mark:                                                     | N/A                                                                    |