# Slack

## Example Usage

```typescript
import { Slack } from "@vercel/sdk/models/payloadoutcome.js";

let value: Slack = {
  channelId: "<id>",
  slackWorkspaceId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `channelId`        | *string*           | :heavy_check_mark: | N/A                |
| `configurationId`  | *string*           | :heavy_minus_sign: | N/A                |
| `slackWorkspaceId` | *string*           | :heavy_check_mark: | N/A                |