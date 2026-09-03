# ConnectConnectorUpdateDataShortcuts

## Example Usage

```typescript
import { ConnectConnectorUpdateDataShortcuts } from "@vercel/sdk/models/connectconnectorupdatedata.js";

let value: ConnectConnectorUpdateDataShortcuts = {
  type: "global",
  name: "<value>",
  callbackId: "<id>",
  description: "judgementally guide tribe swat astride a ouch nor strictly yet",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | [models.ConnectConnectorUpdateData6Type](../models/connectconnectorupdatedata6type.md) | :heavy_check_mark:                                                                     | Where Slack exposes the shortcut.                                                      |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | Shortcut display name.                                                                 |
| `callbackId`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | Identifier included in the shortcut callback.                                          |
| `description`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | Description shown for the shortcut in Slack.                                           |