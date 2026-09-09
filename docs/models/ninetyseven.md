# NinetySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetySeven } from "@vercel/sdk/models/payloadrule.js";

let value: NinetySeven = {
  metricName: "<value>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `metricName`           | *string*               | :heavy_check_mark:     | N/A                    |
| `additionalProperties` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |