# ThirtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyOne } from "@vercel/sdk/models/usereventpayload27provider.js";

let value: ThirtyOne = {
  accessPolicy: {
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `accessPolicy`                                                 | [models.PayloadAccessPolicy](../models/payloadaccesspolicy.md) | :heavy_check_mark:                                             | N/A                                                            |
| `previousName`                                                 | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |