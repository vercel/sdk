# OneHundredAndThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyNine } from "@vercel/sdk/models/usereventjobcommitverification.js";

let value: OneHundredAndThirtyNine = {
  customNameservers: [
    "<value 1>",
  ],
  domain: "some-tool.net",
  prevCustomNameservers: [],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `customNameservers`     | *string*[]              | :heavy_check_mark:      | N/A                     |
| `domain`                | *string*                | :heavy_check_mark:      | N/A                     |
| `prevCustomNameservers` | *string*[]              | :heavy_check_mark:      | N/A                     |