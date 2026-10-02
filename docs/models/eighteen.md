# Eighteen

The payload of the event, if requested.

## Example Usage

```typescript
import { Eighteen } from "@vercel/sdk/models/usereventvia4type.js";

let value: Eighteen = {
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