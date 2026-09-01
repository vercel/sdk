# OneHundredAndTwenty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwenty } from "@vercel/sdk/models/ninetyeight.js";

let value: OneHundredAndTwenty = {
  domain: "ashamed-bandwidth.com",
  customNameservers: [
    "<value 1>",
    "<value 2>",
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