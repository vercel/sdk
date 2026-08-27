# PatchDomainResponseBody3

## Example Usage

```typescript
import { PatchDomainResponseBody3 } from "@vercel/sdk/models/patchdomainop.js";

let value: PatchDomainResponseBody3 = {
  echMode: "auto",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `renew`                                                        | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `customNameservers`                                            | *string*[]                                                     | :heavy_minus_sign:                                             | N/A                                                            |
| `zone`                                                         | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `echMode`                                                      | [models.ResponseBodyEchMode](../models/responsebodyechmode.md) | :heavy_check_mark:                                             | N/A                                                            |