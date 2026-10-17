# OneHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndForty } from "@vercel/sdk/models/usereventjobproject.js";

let value: OneHundredAndForty = {
  customNameservers: [
    "<value 1>",
    "<value 2>",
  ],
  domain: "rotating-rust.com",
  prevCustomNameservers: [],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `customNameservers`     | *string*[]              | :heavy_check_mark:      | N/A                     |
| `domain`                | *string*                | :heavy_check_mark:      | N/A                     |
| `prevCustomNameservers` | *string*[]              | :heavy_check_mark:      | N/A                     |