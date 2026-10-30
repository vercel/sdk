# ThreeHundredAndTwenty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwenty } from "@vercel/sdk/models/usereventpayload261origin.js";

let value: ThreeHundredAndTwenty = {
  domain: "descriptive-custom.biz",
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `domain`             | *string*             | :heavy_check_mark:   | N/A                  |
| `projectId`          | *string*             | :heavy_check_mark:   | N/A                  |
| `projectName`        | *string*             | :heavy_check_mark:   | N/A                  |
| `redirect`           | *string*             | :heavy_minus_sign:   | N/A                  |
| `redirectStatusCode` | *number*             | :heavy_minus_sign:   | N/A                  |
| `target`             | *string*             | :heavy_check_mark:   | N/A                  |