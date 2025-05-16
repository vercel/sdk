# PostDomainsCreator

An object containing information of the domain creator, including the user's id, username, and email.

## Example Usage

```typescript
import { PostDomainsCreator } from "@vercel/sdk/models/postdomainsop.js";

let value: PostDomainsCreator = {
  username: "vercel_user",
  email: "demo@example.com",
  id: "ZspSRT4ljIEEmMHgoDwKWDei",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `username`         | *string*           | :heavy_check_mark: | N/A                |
| `email`            | *string*           | :heavy_check_mark: | N/A                |
| `customerId`       | *string*           | :heavy_minus_sign: | N/A                |
| `isDomainReseller` | *boolean*          | :heavy_minus_sign: | N/A                |
| `id`               | *string*           | :heavy_check_mark: | N/A                |