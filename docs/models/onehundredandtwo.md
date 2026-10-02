# OneHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwo } from "@vercel/sdk/models/before.js";

let value: OneHundredAndTwo = {
  bitbucketAccountId: "<id>",
  bitbucketLogin: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `bitbucketAccountId` | *string*             | :heavy_check_mark:   | N/A                  |
| `bitbucketLogin`     | *string*             | :heavy_check_mark:   | N/A                  |