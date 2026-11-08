# OneHundredAndFourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFourteen } from "@vercel/sdk/models/rule.js";

let value: OneHundredAndFourteen = {
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