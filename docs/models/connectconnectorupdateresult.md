# ConnectConnectorUpdateResult

Updated connector and any required provider follow-up actions.

## Example Usage

```typescript
import { ConnectConnectorUpdateResult } from "@vercel/sdk/models/connectconnectorupdateresult.js";

let value: ConnectConnectorUpdateResult = {
  connector: {
    id: "<id>",
    uid: "<id>",
    createdAt: 5474.56,
    updatedAt: 2563.14,
    type: "discord",
    service: "<value>",
    name: "<value>",
    displayName: "Baylee_Champlin",
    typeName: "<value>",
    supportedSubjectTypes: [
      "<value 1>",
      "<value 2>",
    ],
    supportsInstallation: false,
    supportsRevocation: true,
    supportsTriggers: true,
    supportsIcon: "false",
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `connector`                                                                                               | [models.ConnectConnector](../models/connectconnector.md)                                                  | :heavy_check_mark:                                                                                        | A connector that defines how Vercel accesses an external service.                                         |
| `reinstallNeeded`                                                                                         | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | When true, prompt a team owner or administrator to reinstall the connector before relying on the change.  |
| `reconsentNeeded`                                                                                         | [models.ConnectReconsent](../models/connectreconsent.md)                                                  | :heavy_minus_sign:                                                                                        | Existing authorizations no longer cover the connector's configured scopes, so they must be re-authorized. |
| `serviceSync`                                                                                             | [models.ConnectServiceSync](../models/connectservicesync.md)                                              | :heavy_minus_sign:                                                                                        | Provider-side configuration synchronization result.                                                       |