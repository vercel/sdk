# BuildMachine

An object containing infomation related to the amount of platform resources may be allocated to the User account.

## Example Usage

```typescript
import { BuildMachine } from "@vercel/sdk/models/authuser.js";

let value: BuildMachine = {};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `purchaseType`                                                                                                    | [models.PurchaseType](../models/purchasetype.md)                                                                  | :heavy_minus_sign:                                                                                                | An object containing infomation related to the amount of platform resources may be allocated to the User account. |
| `isDefaultBuildMachine`                                                                                           | *boolean*                                                                                                         | :heavy_minus_sign:                                                                                                | An object containing infomation related to the amount of platform resources may be allocated to the User account. |
| `cores`                                                                                                           | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | An object containing infomation related to the amount of platform resources may be allocated to the User account. |
| `memory`                                                                                                          | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | An object containing infomation related to the amount of platform resources may be allocated to the User account. |