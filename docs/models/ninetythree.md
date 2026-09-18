# NinetyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyThree } from "@vercel/sdk/models/thirtythree.js";

let value: NinetyThree = {
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