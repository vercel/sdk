# Scope1

## Example Usage

```typescript
import { Scope1 } from "@vercel/sdk/models/patchurlprotectionbypassop.js";

let value: Scope1 = {
  userId: "<id>",
  access: "granted",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `userId`                                      | *string*                                      | :heavy_check_mark:                            | Specified user id for the scoped bypass.      |
| `email`                                       | *string*                                      | :heavy_minus_sign:                            | Specified email for the scoped bypass.        |
| `access`                                      | [models.Access](../models/access.md)          | :heavy_check_mark:                            | Invitation status for the user scoped bypass. |