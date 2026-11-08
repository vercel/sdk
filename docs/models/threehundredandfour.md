# ThreeHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFour } from "@vercel/sdk/models/usereventpayload279scope.js";

let value: ThreeHundredAndFour = {
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