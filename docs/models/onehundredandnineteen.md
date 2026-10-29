# OneHundredAndNineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNineteen } from "@vercel/sdk/models/data2.js";

let value: OneHundredAndNineteen = {
  oldSsoProtection: {
    deploymentType: "preview",
  },
  scope: "team",
  ssoProtection: {
    deploymentType: "all",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `oldSsoProtection`                                                                 | [models.OldSsoProtection](../models/oldssoprotection.md)                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `scope`                                                                            | [models.UserEventPayloadScope](../models/usereventpayloadscope.md)                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `ssoProtection`                                                                    | [models.UserEventPayloadSsoProtection](../models/usereventpayloadssoprotection.md) | :heavy_check_mark:                                                                 | N/A                                                                                |