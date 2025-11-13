# OneHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwo } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndTwo = {
  team: {
    id: "<id>",
  },
  previousRule: {
    email: "Fabiola89@yahoo.com",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `team`                                                                 | [models.UserEventPayload102Team](../models/usereventpayload102team.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousRule`                                                         | [models.PayloadPreviousRule](../models/payloadpreviousrule.md)         | :heavy_check_mark:                                                     | N/A                                                                    |