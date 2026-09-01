# NinetyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyFive } from "@vercel/sdk/models/piiredaction.js";

let value: NinetyFive = {
  metricName: "<value>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `metricName`           | *string*               | :heavy_check_mark:     | N/A                    |
| `additionalProperties` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |