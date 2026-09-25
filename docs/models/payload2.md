# Payload2

The payload of the event, if requested.

## Example Usage

```typescript
import { Payload2 } from "@vercel/sdk/models/userevent.js";

let value: Payload2 = {
  enabled: true,
  slackConfigured: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `enabled`          | *boolean*          | :heavy_check_mark: | N/A                |
| `slackConfigured`  | *boolean*          | :heavy_check_mark: | N/A                |