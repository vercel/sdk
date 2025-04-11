# BuyDomainDomain

## Example Usage

```typescript
import { BuyDomainDomain } from "@vercel/sdk/models/buydomainop.js";

let value: BuyDomainDomain = {
  uid: "<id>",
  ns: [
    "<value>",
  ],
  verified: false,
  created: 1256.46,
  pending: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `uid`              | *string*           | :heavy_check_mark: | N/A                |
| `ns`               | *string*[]         | :heavy_check_mark: | N/A                |
| `verified`         | *boolean*          | :heavy_check_mark: | N/A                |
| `created`          | *number*           | :heavy_check_mark: | N/A                |
| `pending`          | *boolean*          | :heavy_check_mark: | N/A                |