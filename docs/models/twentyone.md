# TwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyOne } from "@vercel/sdk/models/usereventprincipal4type.js";

let value: TwentyOne = {
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