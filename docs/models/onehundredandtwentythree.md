# OneHundredAndTwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyThree } from "@vercel/sdk/models/onehundred.js";

let value: OneHundredAndTwentyThree = {
  customNameservers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  domain: "damp-fisherman.name",
  prevCustomNameservers: null,
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `customNameservers`     | *string*[]              | :heavy_check_mark:      | N/A                     |
| `domain`                | *string*                | :heavy_check_mark:      | N/A                     |
| `prevCustomNameservers` | *string*[]              | :heavy_check_mark:      | N/A                     |