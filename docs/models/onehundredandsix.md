# OneHundredAndSix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSix } from "@vercel/sdk/models/sixtyseven.js";

let value: OneHundredAndSix = {
  domain: "spanish-sightseeing.biz",
  customNameservers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
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