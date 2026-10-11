# OneHundredAndFifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFifteen } from "@vercel/sdk/models/after.js";

let value: OneHundredAndFifteen = {
  oldSsoProtection: {
    deploymentType: "all_except_custom_domains",
  },
  scope: "team",
  ssoProtection: null,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `oldSsoProtection`                                                                 | [models.OldSsoProtection](../models/oldssoprotection.md)                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `scope`                                                                            | [models.UserEventPayloadScope](../models/usereventpayloadscope.md)                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `ssoProtection`                                                                    | [models.UserEventPayloadSsoProtection](../models/usereventpayloadssoprotection.md) | :heavy_check_mark:                                                                 | N/A                                                                                |