# OneHundredAndFortySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortySeven } from "@vercel/sdk/models/onehundredandfour.js";

let value: OneHundredAndFortySeven = {
  team: {
    id: "<id>",
  },
  previousRule: {
    email: "Wallace32@hotmail.com",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `team`                                                                 | [models.UserEventPayload147Team](../models/usereventpayload147team.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousRule`                                                         | [models.PreviousRule](../models/previousrule.md)                       | :heavy_check_mark:                                                     | N/A                                                                    |