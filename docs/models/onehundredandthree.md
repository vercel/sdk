# OneHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThree } from "@vercel/sdk/models/fiftysix.js";

let value: OneHundredAndThree = {
  domain: "sad-produce.info",
  customNameservers: [
    "<value 1>",
    "<value 2>",
  ],
  prevCustomNameservers: null,
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `domain`                | *string*                | :heavy_check_mark:      | N/A                     |
| `customNameservers`     | *string*[]              | :heavy_check_mark:      | N/A                     |
| `prevCustomNameservers` | *string*[]              | :heavy_check_mark:      | N/A                     |