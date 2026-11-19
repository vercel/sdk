# PayloadSlack

## Example Usage

```typescript
import { PayloadSlack } from "@vercel/sdk/models/payloadoutcome.js";

let value: PayloadSlack = {
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