# FortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FortySix } from "@vercel/sdk/models/oldteam.js";

let value: FortySix = {
  gitlabLogin: "<value>",
  gitlabEmail: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `gitlabLogin`      | *string*           | :heavy_check_mark: | N/A                |
| `gitlabEmail`      | *string*           | :heavy_check_mark: | N/A                |
| `gitlabName`       | *string*           | :heavy_minus_sign: | N/A                |
| `zeitAccount`      | *string*           | :heavy_minus_sign: | N/A                |
| `zeitAccountType`  | *string*           | :heavy_minus_sign: | N/A                |