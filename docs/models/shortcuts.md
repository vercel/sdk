# Shortcuts

## Example Usage

```typescript
import { Shortcuts } from "@vercel/sdk/models/connectconnectorcreatedata.js";

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
| `type`                                                                                 | [models.ConnectConnectorCreateData8Type](../models/connectconnectorcreatedata8type.md) | :heavy_check_mark:                                                                     | Where Slack exposes the shortcut.                                                      |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | Shortcut display name.                                                                 |
| `callbackId`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | Identifier included in the shortcut callback.                                          |
| `description`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | Description shown for the shortcut in Slack.                                           |