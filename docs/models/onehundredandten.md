# OneHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTen } from "@vercel/sdk/models/fiftyeight.js";

let value: OneHundredAndTen = {
  oldSsoProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
  },
  scope: "team",
  ssoProtection: {
    deploymentType: "preview",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `oldSsoProtection`                                                                 | [models.OldSsoProtection](../models/oldssoprotection.md)                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `scope`                                                                            | [models.UserEventPayloadScope](../models/usereventpayloadscope.md)                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `ssoProtection`                                                                    | [models.UserEventPayloadSsoProtection](../models/usereventpayloadssoprotection.md) | :heavy_check_mark:                                                                 | N/A                                                                                |