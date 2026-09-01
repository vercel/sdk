# TwoHundredAndFiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyOne } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndFiftyOne = {
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