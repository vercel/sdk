# ThreeHundredAndSixtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtySix } from "@vercel/sdk/models/payloadcity.js";

let value: ThreeHundredAndSixtySix = {
  store: {
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `ownerId`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `store`                                                                  | [models.UserEventPayload366Store](../models/usereventpayload366store.md) | :heavy_check_mark:                                                       | N/A                                                                      |