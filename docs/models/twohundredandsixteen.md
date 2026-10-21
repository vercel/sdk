# TwoHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixteen } from "@vercel/sdk/models/rulegroups.js";

let value: TwoHundredAndSixteen = {
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