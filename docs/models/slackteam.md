# SlackTeam

Slack workspace metadata.

## Example Usage

```typescript
import { SlackTeam } from "@vercel/sdk/models/connectconnectorcreatedata.js";

let value: SlackTeam = {
  id: "<id>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `id`                    | *string*                | :heavy_check_mark:      | Slack workspace ID.     |
| `name`                  | *string*                | :heavy_minus_sign:      | Slack workspace name.   |
| `domain`                | *string*                | :heavy_minus_sign:      | Slack workspace domain. |