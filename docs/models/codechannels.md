# CodeChannels

Code channel settings for the managed Slack app. Updates preserve omitted settings.

## Example Usage

```typescript
import { CodeChannels } from "@vercel/sdk/models/connectconnectorupdatedata.js";

let value: CodeChannels = {};
```

## Fields

| Field                                                                                                                                                                         | Type                                                                                                                                                                          | Required                                                                                                                                                                      | Description                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                                                                                     | *boolean*                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                            | Enable Slack code channels. Adds the code_channels:manage bot scope and, with triggers, the agent_session_stopped and message.session events. Defaults to false for new apps. |