# OneHundredAndSeventyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyThree } from "@vercel/sdk/models/payloadbranchmatcher.js";

let value: OneHundredAndSeventyThree = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "oily-fireplace.info",
  target: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `projectId`          | *string*             | :heavy_check_mark:   | N/A                  |
| `projectName`        | *string*             | :heavy_check_mark:   | N/A                  |
| `domain`             | *string*             | :heavy_check_mark:   | N/A                  |
| `target`             | *string*             | :heavy_check_mark:   | N/A                  |
| `redirect`           | *string*             | :heavy_minus_sign:   | N/A                  |
| `redirectStatusCode` | *number*             | :heavy_minus_sign:   | N/A                  |