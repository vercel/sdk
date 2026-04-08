# OneHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEighty } from "@vercel/sdk/models/usereventpayload162previous.js";

let value: OneHundredAndEighty = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "taut-makeover.biz",
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