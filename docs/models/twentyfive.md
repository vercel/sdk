# TwentyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyFive } from "@vercel/sdk/models/userevent.js";

let value: TwentyFive = {
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