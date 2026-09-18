# TwoHundredAndSixtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyFive } from "@vercel/sdk/models/trigger.js";

let value: TwoHundredAndSixtyFive = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `customEnvironmentId`   | *string*                | :heavy_check_mark:      | N/A                     |
| `customEnvironmentSlug` | *string*                | :heavy_check_mark:      | N/A                     |
| `projectId`             | *string*                | :heavy_check_mark:      | N/A                     |
| `projectName`           | *string*                | :heavy_check_mark:      | N/A                     |