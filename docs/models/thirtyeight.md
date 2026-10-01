# ThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyEight } from "@vercel/sdk/models/via3.js";

let value: ThirtyEight = {
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