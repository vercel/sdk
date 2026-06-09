# TwoHundredAndFourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFourteen } from "@vercel/sdk/models/usereventpayloadprevious.js";

let value: TwoHundredAndFourteen = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "intelligent-marimba.biz",
  target: "<value>",
  redirect: null,
  redirectStatusCode: 9073.18,
  gitBranch: null,
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