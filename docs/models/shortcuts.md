# Shortcuts

## Example Usage

```typescript
import { Shortcuts } from "@vercel/sdk/models/connectconnectorupdatedata.js";

let value: Shortcuts = {
  type: "message",
  name: "<value>",
  callbackId: "<id>",
  description:
    "upright doubtfully flickering pertinent supposing favorable stranger quizzically colour gee",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | [models.ConnectConnectorUpdateData6Type](../models/connectconnectorupdatedata6type.md) | :heavy_check_mark:                                                                     | Where Slack exposes the shortcut.                                                      |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | Shortcut display name.                                                                 |
| `callbackId`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | Identifier included in the shortcut callback.                                          |
| `description`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | Description shown for the shortcut in Slack.                                           |