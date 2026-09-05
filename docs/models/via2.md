# Via2

Metadata for {@link viaIds}.

## Example Usage

```typescript
import { Via2 } from "@vercel/sdk/models/fourhundredandfour.js";

let value: Via2 = {
  type: "app",
  clientId: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `type`                                                          | [models.UserEventViaType](../models/usereventviatype.md)        | :heavy_check_mark:                                              | N/A                                                             |
| `id`                                                            | *string*                                                        | :heavy_minus_sign:                                              | The backing Vercel App ID. When absent, defaults to `clientId`. |
| `clientId`                                                      | *string*                                                        | :heavy_check_mark:                                              | The OAuth 2.0 client ID, which may be a CIMD URL.               |
| `name`                                                          | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |