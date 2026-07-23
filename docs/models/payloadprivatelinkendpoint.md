# PayloadPrivateLinkEndpoint

## Example Usage

```typescript
import { PayloadPrivateLinkEndpoint } from "@vercel/sdk/models/preventautoblocking.js";

let value: PayloadPrivateLinkEndpoint = {
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `environmentIds`   | *string*[]         | :heavy_minus_sign: | N/A                |
| `privateDnsNames`  | *string*[]         | :heavy_minus_sign: | N/A                |