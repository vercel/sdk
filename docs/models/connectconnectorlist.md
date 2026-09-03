# ConnectConnectorList

Page of connectors.

## Example Usage

```typescript
import { ConnectConnectorList } from "@vercel/sdk/models/connectconnectorlist.js";

let value: ConnectConnectorList = {
  connectors: [
    {
      id: "<id>",
      uid: "<id>",
      createdAt: 9290.27,
      updatedAt: 2570.62,
      type: "salesforce",
      service: "<value>",
      name: "<value>",
      displayName: "Bella_Langosh80",
      typeName: "<value>",
      supportedSubjectTypes: [
        "<value 1>",
        "<value 2>",
      ],
      supportsInstallation: false,
      supportsRevocation: true,
      supportsTriggers: false,
      supportsIcon: "false",
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