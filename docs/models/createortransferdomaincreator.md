# CreateOrTransferDomainCreator

An object containing information of the domain creator, including the user's id, username, and email.

## Example Usage

```typescript
import { CreateOrTransferDomainCreator } from "@vercel/sdk/models/createortransferdomainop.js";

let value: CreateOrTransferDomainCreator = {
  email: "demo@example.com",
  id: "ZspSRT4ljIEEmMHgoDwKWDei",
  username: "vercel_user",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `customerId`       | *string*           | :heavy_minus_sign: | N/A                |
| `email`            | *string*           | :heavy_check_mark: | N/A                |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `isDomainReseller` | *boolean*          | :heavy_minus_sign: | N/A                |
| `username`         | *string*           | :heavy_check_mark: | N/A                |