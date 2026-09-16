# ConnectConnectorUpdateResult

Updated connector and any required provider follow-up actions.

## Example Usage

```typescript
import { ConnectConnectorUpdateResult } from "@vercel/sdk/models/connectconnectorupdateresult.js";

let value: ConnectConnectorUpdateResult = {
  connector: {
    createdAt: 5474.56,
    displayName: "Deshaun12",
    id: "<id>",
    name: "<value>",
    service: "<value>",
    supportedSubjectTypes: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    supportsIcon: "maybe",
    supportsInstallation: false,
    supportsRevocation: false,
    supportsTriggers: true,
    type: "github",
    typeName: "<value>",
    uid: "<id>",
    updatedAt: 2317.06,
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `connector`                                                                                               | [models.ConnectConnector](../models/connectconnector.md)                                                  | :heavy_check_mark:                                                                                        | A connector that defines how Vercel accesses an external service.                                         |
| `reconsentNeeded`                                                                                         | [models.ConnectReconsent](../models/connectreconsent.md)                                                  | :heavy_minus_sign:                                                                                        | Existing authorizations no longer cover the connector's configured scopes, so they must be re-authorized. |
| `reinstallNeeded`                                                                                         | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | When true, prompt a team owner or administrator to reinstall the connector before relying on the change.  |
| `serviceSync`                                                                                             | [models.ConnectServiceSync](../models/connectservicesync.md)                                              | :heavy_minus_sign:                                                                                        | Provider-side configuration synchronization result.                                                       |