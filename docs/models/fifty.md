# Fifty

The payload of the event, if requested.

## Example Usage

```typescript
import { Fifty } from "@vercel/sdk/models/userevent.js";

let value: Fifty = {
  bitbucketLogin: "<value>",
  bitbucketAccountId: "<id>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `bitbucketLogin`     | *string*             | :heavy_check_mark:   | N/A                  |
| `bitbucketAccountId` | *string*             | :heavy_check_mark:   | N/A                  |