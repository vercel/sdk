# Ninety

The payload of the event, if requested.

## Example Usage

```typescript
import { Ninety } from "@vercel/sdk/models/sixty.js";

let value: Ninety = {
  metricName: "<value>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `metricName`           | *string*               | :heavy_check_mark:     | N/A                    |
| `additionalProperties` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |