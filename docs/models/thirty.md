# Thirty

The payload of the event, if requested.

## Example Usage

```typescript
import { Thirty } from "@vercel/sdk/models/usereventprincipaltype.js";

let value: Thirty = {
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