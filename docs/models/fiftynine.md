# FiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyNine } from "@vercel/sdk/models/usereventpayloadproject.js";

let value: FiftyNine = {
  bitbucketEmail: "<value>",
  bitbucketLogin: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `bitbucketEmail`   | *string*           | :heavy_check_mark: | N/A                |
| `bitbucketLogin`   | *string*           | :heavy_check_mark: | N/A                |
| `bitbucketName`    | *string*           | :heavy_minus_sign: | N/A                |