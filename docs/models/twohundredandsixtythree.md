# TwoHundredAndSixtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyThree } from "@vercel/sdk/models/trigger.js";

let value: TwoHundredAndSixtyThree = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  enableSchedulesByDefault: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `customEnvironmentId`      | *string*                   | :heavy_check_mark:         | N/A                        |
| `customEnvironmentSlug`    | *string*                   | :heavy_check_mark:         | N/A                        |
| `enableSchedulesByDefault` | *boolean*                  | :heavy_check_mark:         | N/A                        |
| `projectId`                | *string*                   | :heavy_check_mark:         | N/A                        |
| `projectName`              | *string*                   | :heavy_check_mark:         | N/A                        |