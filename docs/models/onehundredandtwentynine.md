# OneHundredAndTwentyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyNine } from "@vercel/sdk/models/usereventjobpayloadprovider.js";

let value: OneHundredAndTwentyNine = {
  customNameservers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  domain: "well-off-bookcase.biz",
  prevCustomNameservers: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `customNameservers`     | *string*[]              | :heavy_check_mark:      | N/A                     |
| `domain`                | *string*                | :heavy_check_mark:      | N/A                     |
| `prevCustomNameservers` | *string*[]              | :heavy_check_mark:      | N/A                     |