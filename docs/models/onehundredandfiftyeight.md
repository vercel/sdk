# OneHundredAndFiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyEight } from "@vercel/sdk/models/payloadviewpreference.js";

let value: OneHundredAndFiftyEight = {
  projectId: "<id>",
  projectName: "<value>",
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `projectId`             | *string*                | :heavy_check_mark:      | N/A                     |
| `projectName`           | *string*                | :heavy_check_mark:      | N/A                     |
| `customEnvironmentId`   | *string*                | :heavy_check_mark:      | N/A                     |
| `customEnvironmentSlug` | *string*                | :heavy_check_mark:      | N/A                     |