# ConnectProjectConnectorConnectionList

Page of connectors connected to a project.

## Example Usage

```typescript
import { ConnectProjectConnectorConnectionList } from "@vercel/sdk/models/connectprojectconnectorconnectionlist.js";

let value: ConnectProjectConnectorConnectionList = {
  connectors: [
    {
      connectorId: "<id>",
      project: {
        id: "<id>",
        name: "<value>",
      },
      enabledEnvironments: [
        "<value>",
      ],
      createdAt: 7168.99,
      updatedAt: 7457.72,
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
| `connectors`                                                               | [models.ConnectProjectConnection](../models/connectprojectconnection.md)[] | :heavy_check_mark:                                                         | Connector connections in this page.                                        |
| `pagination`                                                               | [models.ConnectPagination](../models/connectpagination.md)                 | :heavy_check_mark:                                                         | Cursor for the next page.                                                  |