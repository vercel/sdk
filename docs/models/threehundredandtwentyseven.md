# ThreeHundredAndTwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentySeven } from "@vercel/sdk/models/usereventpayload279scope.js";

let value: ThreeHundredAndTwentySeven = {
  domain: "considerate-suv.net",
  gitBranch: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  redirect: null,
  redirectStatusCode: 5092.48,
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