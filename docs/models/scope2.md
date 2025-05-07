# Scope2

## Example Usage

```typescript
import { Scope2 } from "@vercel/sdk/models/patchurlprotectionbypassop.js";

let value: Scope2 = {
  email: "Haven82@hotmail.com",
  access: "granted",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `userId`                                       | *string*                                       | :heavy_minus_sign:                             | Specified user id for the scoped bypass.       |
| `email`                                        | *string*                                       | :heavy_check_mark:                             | Specified email for the scoped bypass.         |
| `access`                                       | [models.ScopeAccess](../models/scopeaccess.md) | :heavy_check_mark:                             | Invitation status for the user scoped bypass.  |