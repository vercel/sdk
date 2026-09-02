# SlashCommands

## Example Usage

```typescript
import { SlashCommands } from "@vercel/sdk/models/connectconnectorcreatedata.js";

let value: SlashCommands = {
  command: "<value>",
  description: "ouch fumigate against lest thoroughly",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `command`                                         | *string*                                          | :heavy_check_mark:                                | Slash command including its leading slash.        |
| `description`                                     | *string*                                          | :heavy_check_mark:                                | Description shown for the slash command in Slack. |
| `usageHint`                                       | *string*                                          | :heavy_minus_sign:                                | Optional usage hint shown for the slash command.  |
| `shouldEscape`                                    | *boolean*                                         | :heavy_minus_sign:                                | Whether Slack should escape command arguments.    |