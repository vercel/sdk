# NinetySix

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetySix } from "@vercel/sdk/models/userevent.js";

let value: NinetySix = {
  email: "Lonny_Kassulke62@gmail.com",
  bitbucketLogin: "<value>",
  bitbucketEmail: "<value>",
  bitbucketName: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `email`            | *string*           | :heavy_check_mark: | N/A                |
| `bitbucketLogin`   | *string*           | :heavy_check_mark: | N/A                |
| `bitbucketEmail`   | *string*           | :heavy_check_mark: | N/A                |
| `bitbucketName`    | *string*           | :heavy_check_mark: | N/A                |
| `zeitAccount`      | *string*           | :heavy_check_mark: | N/A                |
| `zeitAccountType`  | *string*           | :heavy_check_mark: | N/A                |