# OneHundredAndTwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyFour } from "@vercel/sdk/models/deployhook.js";

let value: OneHundredAndTwentyFour = {
  customNameservers: [],
  domain: "scaly-safe.info",
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
| `customNameservers`     | *string*[]              | :heavy_check_mark:      | N/A                     |
| `domain`                | *string*                | :heavy_check_mark:      | N/A                     |
| `prevCustomNameservers` | *string*[]              | :heavy_check_mark:      | N/A                     |