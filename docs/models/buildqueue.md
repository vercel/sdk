# BuildQueue

An object containing infomation related to the amount of platform resources may be allocated to the User account.

## Example Usage

```typescript
import { BuildQueue } from "@vercel/sdk/models/authuser.js";

let value: BuildQueue = {};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `configuration`                                                                                                   | [models.AuthUserConfiguration](../models/authuserconfiguration.md)                                                | :heavy_minus_sign:                                                                                                | An object containing infomation related to the amount of platform resources may be allocated to the User account. |