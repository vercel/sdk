# ThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyEight } from "@vercel/sdk/models/usereventpayload21provider.js";

let value: ThirtyEight = {
  privateModel: {
    slug: "<value>",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `privateModel`                                                 | [models.PayloadPrivateModel](../models/payloadprivatemodel.md) | :heavy_check_mark:                                             | N/A                                                            |