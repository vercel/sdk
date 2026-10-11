# OneHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFour } from "@vercel/sdk/models/after.js";

let value: OneHundredAndFour = {
  gitlabEmail: "<value>",
  gitlabLogin: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `gitlabEmail`      | *string*           | :heavy_check_mark: | N/A                |
| `gitlabLogin`      | *string*           | :heavy_check_mark: | N/A                |
| `gitlabName`       | *string*           | :heavy_minus_sign: | N/A                |
| `zeitAccount`      | *string*           | :heavy_minus_sign: | N/A                |
| `zeitAccountType`  | *string*           | :heavy_minus_sign: | N/A                |