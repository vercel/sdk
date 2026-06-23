# ContactPendingVerification

The registrant contact has not yet been verified. The contact must be verified by `verifyBy`, and a verification email is sent to `email`.

## Example Usage

```typescript
import { ContactPendingVerification } from "@vercel/sdk/models/contactpendingverification.js";

let value: ContactPendingVerification = {
  verified: false,
  verifyBy: "<value>",
  email: "Linnie_Hessel36@yahoo.com",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `verified`                         | *false*                            | :heavy_check_mark:                 | N/A                                |
| `verifyBy`                         | *string*                           | :heavy_check_mark:                 | a string to be decoded into a Date |
| `email`                            | *string*                           | :heavy_check_mark:                 | N/A                                |