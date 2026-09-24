# TwoHundredAndNinetyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyTwo } from "@vercel/sdk/models/twohundredandeightythree.js";

let value: TwoHundredAndNinetyTwo = {
  domain: "homely-technician.name",
  gitBranch: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  redirect: "<value>",
  redirectStatusCode: 386.32,
  target: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `configuredBy`       | *string*             | :heavy_minus_sign:   | N/A                  |
| `domain`             | *string*             | :heavy_check_mark:   | N/A                  |
| `gitBranch`          | *string*             | :heavy_check_mark:   | N/A                  |
| `projectId`          | *string*             | :heavy_check_mark:   | N/A                  |
| `projectName`        | *string*             | :heavy_check_mark:   | N/A                  |
| `redirect`           | *string*             | :heavy_check_mark:   | N/A                  |
| `redirectStatusCode` | *number*             | :heavy_check_mark:   | N/A                  |
| `target`             | *string*             | :heavy_check_mark:   | N/A                  |