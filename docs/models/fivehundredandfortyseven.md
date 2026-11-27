# FiveHundredAndFortySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFortySeven } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndFortySeven = {
  chatId: "<id>",
  messageId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `chatId`           | *string*           | :heavy_check_mark: | N/A                |
| `chatTitle`        | *string*           | :heavy_minus_sign: | N/A                |
| `messageId`        | *string*           | :heavy_check_mark: | N/A                |