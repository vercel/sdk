# TwoHundredAndSixtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyFour } from "@vercel/sdk/models/envid2.js";

let value: TwoHundredAndSixtyFour = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "limping-pear.net",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `projectId`          | *string*             | :heavy_check_mark:   | N/A                  |
| `projectName`        | *string*             | :heavy_check_mark:   | N/A                  |
| `domain`             | *string*             | :heavy_check_mark:   | N/A                  |
| `redirect`           | *string*             | :heavy_minus_sign:   | N/A                  |
| `redirectStatusCode` | *number*             | :heavy_minus_sign:   | N/A                  |