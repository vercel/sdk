# ConnectConnectorProjectConnectionList

Page of projects connected to a connector.

## Example Usage

```typescript
import { ConnectConnectorProjectConnectionList } from "@vercel/sdk/models/connectconnectorprojectconnectionlist.js";

let value: ConnectConnectorProjectConnectionList = {
  projects: [
    {
      connectorId: "<id>",
      project: {
        id: "<id>",
        name: "<value>",
      },
      enabledEnvironments: [],
      createdAt: 3862.16,
      updatedAt: 8289.6,
    },
  ],
  pagination: {
    next: "<value>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `projects`                                                                 | [models.ConnectProjectConnection](../models/connectprojectconnection.md)[] | :heavy_check_mark:                                                         | Project connections in this page.                                          |
| `pagination`                                                               | [models.ConnectPagination](../models/connectpagination.md)                 | :heavy_check_mark:                                                         | Cursor for the next page.                                                  |