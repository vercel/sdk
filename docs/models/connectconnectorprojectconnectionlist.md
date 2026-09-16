# ConnectConnectorProjectConnectionList

Page of projects connected to a connector.

## Example Usage

```typescript
import { ConnectConnectorProjectConnectionList } from "@vercel/sdk/models/connectconnectorprojectconnectionlist.js";

let value: ConnectConnectorProjectConnectionList = {
  pagination: {
    next: "<value>",
  },
  projects: [
    {
      connectorId: "<id>",
      createdAt: 2953.51,
      enabledEnvironments: [],
      project: {
        id: "<id>",
        name: "<value>",
      },
      updatedAt: 8289.6,
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `pagination`                                                               | [models.ConnectPagination](../models/connectpagination.md)                 | :heavy_check_mark:                                                         | Cursor for the next page.                                                  |
| `projects`                                                                 | [models.ConnectProjectConnection](../models/connectprojectconnection.md)[] | :heavy_check_mark:                                                         | Project connections in this page.                                          |