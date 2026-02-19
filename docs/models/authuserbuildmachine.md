# AuthUserBuildMachine

An object containing infomation related to the amount of platform resources may be allocated to the User account.

## Example Usage

```typescript
import { AuthUserBuildMachine } from "@vercel/sdk/models/authuser.js";

let value: AuthUserBuildMachine = {};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `default`                                                                                                         | [models.AuthUserDefault](../models/authuserdefault.md)                                                            | :heavy_minus_sign:                                                                                                | An object containing infomation related to the amount of platform resources may be allocated to the User account. |
| `purchaseType`                                                                                                    | [models.PurchaseType](../models/purchasetype.md)                                                                  | :heavy_minus_sign:                                                                                                | An object containing infomation related to the amount of platform resources may be allocated to the User account. |
| `defaultPurchaseType`                                                                                             | [models.DefaultPurchaseType](../models/defaultpurchasetype.md)                                                    | :heavy_minus_sign:                                                                                                | An object containing infomation related to the amount of platform resources may be allocated to the User account. |
| `isDefaultBuildMachine`                                                                                           | *boolean*                                                                                                         | :heavy_minus_sign:                                                                                                | An object containing infomation related to the amount of platform resources may be allocated to the User account. |
| `cores`                                                                                                           | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | An object containing infomation related to the amount of platform resources may be allocated to the User account. |
| `memory`                                                                                                          | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | An object containing infomation related to the amount of platform resources may be allocated to the User account. |