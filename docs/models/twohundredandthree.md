# TwoHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThree } from "@vercel/sdk/models/onehundredandfiftysix.js";

let value: TwoHundredAndThree = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "querulous-moment.net",
  target: "<value>",
  redirect: "<value>",
  redirectStatusCode: 2067.22,
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