# OneHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeven } from "@vercel/sdk/models/fiftyfour.js";

let value: OneHundredAndSeven = {
  oldSsoProtection: null,
  scope: "team",
  ssoProtection: {
    deploymentType: "all_except_custom_domains",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `oldSsoProtection`                                                                 | [models.OldSsoProtection](../models/oldssoprotection.md)                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `scope`                                                                            | [models.UserEventPayloadScope](../models/usereventpayloadscope.md)                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `ssoProtection`                                                                    | [models.UserEventPayloadSsoProtection](../models/usereventpayloadssoprotection.md) | :heavy_check_mark:                                                                 | N/A                                                                                |