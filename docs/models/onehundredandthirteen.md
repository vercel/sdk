# OneHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirteen } from "@vercel/sdk/models/job6.js";

let value: OneHundredAndThirteen = {
  domain: "blushing-grass.biz",
  customNameservers: [
    "<value 1>",
  ],
  prevCustomNameservers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `domain`                | *string*                | :heavy_check_mark:      | N/A                     |
| `customNameservers`     | *string*[]              | :heavy_check_mark:      | N/A                     |
| `prevCustomNameservers` | *string*[]              | :heavy_check_mark:      | N/A                     |