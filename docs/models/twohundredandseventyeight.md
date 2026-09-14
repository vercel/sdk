# TwoHundredAndSeventyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyEight } from "@vercel/sdk/models/twohundredandseventyseven.js";

let value: TwoHundredAndSeventyEight = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "realistic-heartbeat.org",
  target: "<value>",
  redirect: "<value>",
  redirectStatusCode: 4265.09,
  gitBranch: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `projectId`          | *string*             | :heavy_check_mark:   | N/A                  |
| `projectName`        | *string*             | :heavy_check_mark:   | N/A                  |
| `domain`             | *string*             | :heavy_check_mark:   | N/A                  |
| `target`             | *string*             | :heavy_check_mark:   | N/A                  |
| `redirect`           | *string*             | :heavy_check_mark:   | N/A                  |
| `redirectStatusCode` | *number*             | :heavy_check_mark:   | N/A                  |
| `gitBranch`          | *string*             | :heavy_check_mark:   | N/A                  |
| `configuredBy`       | *string*             | :heavy_minus_sign:   | N/A                  |