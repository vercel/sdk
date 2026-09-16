# AuthUserSecurity

An object containing infomation related to the amount of platform resources may be allocated to the User account.

## Example Usage

```typescript
import { AuthUserSecurity } from "@vercel/sdk/models/authuser.js";

let value: AuthUserSecurity = {};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `customRules`                                                                                                     | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | An object containing infomation related to the amount of platform resources may be allocated to the User account. |
| `ipBlocks`                                                                                                        | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | An object containing infomation related to the amount of platform resources may be allocated to the User account. |
| `ipBypass`                                                                                                        | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | An object containing infomation related to the amount of platform resources may be allocated to the User account. |
| `rateLimit`                                                                                                       | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | An object containing infomation related to the amount of platform resources may be allocated to the User account. |