# Via2

Metadata for {@link viaIds}.

## Example Usage

```typescript
import { Via2 } from "@vercel/sdk/models/userevent.js";

let value: Via2 = {
  clientId: "<id>",
  name: "<value>",
  type: "app",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `clientId`                                                      | *string*                                                        | :heavy_check_mark:                                              | The OAuth 2.0 client ID, which may be a CIMD URL.               |
| `id`                                                            | *string*                                                        | :heavy_minus_sign:                                              | The backing Vercel App ID. When absent, defaults to `clientId`. |
| `name`                                                          | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `type`                                                          | [models.UserEventViaType](../models/usereventviatype.md)        | :heavy_check_mark:                                              | N/A                                                             |