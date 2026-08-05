# EightySix

The payload of the event, if requested.

## Example Usage

```typescript
import { EightySix } from "@vercel/sdk/models/usereventpayloaditems.js";

let value: EightySix = {
  bitbucketLogin: "<value>",
  bitbucketAccountId: "<id>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `bitbucketLogin`     | *string*             | :heavy_check_mark:   | N/A                  |
| `bitbucketAccountId` | *string*             | :heavy_check_mark:   | N/A                  |