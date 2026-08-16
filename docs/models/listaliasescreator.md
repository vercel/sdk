# ListAliasesCreator

Information of the user who created the alias

## Example Usage

```typescript
import { ListAliasesCreator } from "@vercel/sdk/models/listaliasesop.js";

let value: ListAliasesCreator = {
  uid: "96SnxkFiMyVKsK3pnoHfx3Hz",
  email: "john-doe@gmail.com",
  username: "john-doe",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `uid`                                      | *string*                                   | :heavy_check_mark:                         | ID of the user who created the alias       | 96SnxkFiMyVKsK3pnoHfx3Hz                   |
| `email`                                    | *string*                                   | :heavy_minus_sign:                         | Email of the user who created the alias    | john-doe@gmail.com                         |
| `username`                                 | *string*                                   | :heavy_minus_sign:                         | Username of the user who created the alias | john-doe                                   |