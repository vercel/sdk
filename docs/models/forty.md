# Forty

The payload of the event, if requested.

## Example Usage

```typescript
import { Forty } from "@vercel/sdk/models/via3.js";

let value: Forty = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `rule`                           | [models.Rule](../models/rule.md) | :heavy_check_mark:               | N/A                              |