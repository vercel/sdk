# CreateConnectorAuthorizationRequestResponseBody

## Example Usage

```typescript
import { CreateConnectorAuthorizationRequestResponseBody } from "@vercel/sdk/models/createconnectorauthorizationrequestop.js";

let value: CreateConnectorAuthorizationRequestResponseBody = {
  url: "https://long-understanding.com/",
  request: "<value>",
  verifier: "<value>",
  expiresAt: 8577.22,
  connector: {
    id: "<id>",
    uid: "<id>",
    type: "<value>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `request`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `verifier`                                                                                                       | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `deviceCode`                                                                                                     | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `expiresAt`                                                                                                      | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `connector`                                                                                                      | [models.CreateConnectorAuthorizationRequestConnector](../models/createconnectorauthorizationrequestconnector.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |