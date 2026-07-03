# Eighteen

The payload of the event, if requested.

## Example Usage

```typescript
import { Eighteen } from "@vercel/sdk/models/action.js";

let value: Eighteen = {
  privateModel: {
    slug: "<value>",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `privateModel`                                                 | [models.PayloadPrivateModel](../models/payloadprivatemodel.md) | :heavy_check_mark:                                             | N/A                                                            |