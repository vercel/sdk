# TwoHundredAndSeventyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyEight } from "@vercel/sdk/models/twohundredandtwentyseven.js";

let value: TwoHundredAndSeventyEight = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `customEnvironmentId`      | *string*                   | :heavy_check_mark:         | N/A                        |
| `customEnvironmentSlug`    | *string*                   | :heavy_check_mark:         | N/A                        |
| `enableSchedulesByDefault` | *boolean*                  | :heavy_minus_sign:         | N/A                        |
| `projectId`                | *string*                   | :heavy_check_mark:         | N/A                        |
| `projectName`              | *string*                   | :heavy_check_mark:         | N/A                        |