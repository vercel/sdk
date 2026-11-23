# TwoHundredAndThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyEight } from "@vercel/sdk/models/oldenvvar.js";

let value: TwoHundredAndThirtyEight = {
  enabled: false,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `allowedIntegrationCount`      | *number*                       | :heavy_minus_sign:             | N/A                            |
| `allowedIntegrationIds`        | *string*[]                     | :heavy_minus_sign:             | N/A                            |
| `enabled`                      | *boolean*                      | :heavy_check_mark:             | N/A                            |
| `resourceOnlyIntegrationCount` | *number*                       | :heavy_minus_sign:             | N/A                            |