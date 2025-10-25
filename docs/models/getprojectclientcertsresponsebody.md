# GetProjectClientCertsResponseBody

Client certificates retrieved successfully

## Example Usage

```typescript
import { GetProjectClientCertsResponseBody } from "@vercel/sdk/models/getprojectclientcertsop.js";

let value: GetProjectClientCertsResponseBody = {
  clientCerts: [
    {
      origin: "<value>",
      id: "<id>",
    },
  ],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `clientCerts`                                    | [models.ClientCerts](../models/clientcerts.md)[] | :heavy_check_mark:                               | N/A                                              |