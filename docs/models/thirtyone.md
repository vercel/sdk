# ThirtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyOne } from "@vercel/sdk/models/thirty.js";

let value: ThirtyOne = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `rule`                                         | [models.PayloadRule](../models/payloadrule.md) | :heavy_check_mark:                             | N/A                                            |