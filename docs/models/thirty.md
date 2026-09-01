# Thirty

The payload of the event, if requested.

## Example Usage

```typescript
import { Thirty } from "@vercel/sdk/models/piiredaction.js";

let value: Thirty = {
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