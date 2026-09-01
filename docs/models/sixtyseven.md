# SixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtySeven } from "@vercel/sdk/models/piiredaction.js";

let value: SixtySeven = {
  action: "mutate",
  data: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `subscriptionId`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `action`                                                                 | [models.UserEventPayload67Action](../models/usereventpayload67action.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | Record<string, *any*>                                                    | :heavy_check_mark:                                                       | N/A                                                                      |