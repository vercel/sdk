# ConnectConnectorList

Page of connectors.

## Example Usage

```typescript
import { ConnectConnectorList } from "@vercel/sdk/models/connectconnectorlist.js";

let value: ConnectConnectorList = {
  connectors: [
    {
      createdAt: 9290.27,
      displayName: "Desiree50",
      id: "<id>",
      name: "<value>",
      service: "<value>",
      supportedSubjectTypes: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      supportsIcon: "false",
      supportsInstallation: false,
      supportsRevocation: false,
      supportsTriggers: true,
      type: "microsoft-teams",
      typeName: "<value>",
      uid: "<id>",
      updatedAt: 469.31,
    },
  ],
  pagination: {
    next: "<value>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `connectors`                                               | [models.ConnectConnector](../models/connectconnector.md)[] | :heavy_check_mark:                                         | Connectors in this page.                                   |
| `pagination`                                               | [models.ConnectPagination](../models/connectpagination.md) | :heavy_check_mark:                                         | Cursor for the next page.                                  |