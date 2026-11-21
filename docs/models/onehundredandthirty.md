# OneHundredAndThirty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirty } from "@vercel/sdk/models/usereventpayloaditems.js";

let value: OneHundredAndThirty = {
  oldPasswordProtection: {
    deploymentType: "preview",
  },
  passwordProtection: {
    deploymentType: "preview",
  },
  scope: "team",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `oldPasswordProtection`                                                                      | [models.OldPasswordProtection](../models/oldpasswordprotection.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `passwordChanged`                                                                            | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `passwordProtection`                                                                         | [models.UserEventPayloadPasswordProtection](../models/usereventpayloadpasswordprotection.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `scope`                                                                                      | [models.PayloadScope](../models/payloadscope.md)                                             | :heavy_check_mark:                                                                           | N/A                                                                                          |