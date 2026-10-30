# ThreeHundredAndTwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyTwo } from "@vercel/sdk/models/usereventpayload261origin.js";

let value: ThreeHundredAndTwentyTwo = {
  domain: "purple-asset.org",
  projectId: "<id>",
  projectName: "<value>",
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