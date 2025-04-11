# SeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyOne } from "@vercel/sdk/models/userevent.js";

let value: SeventyOne = {
  drainUrl: "https://corny-sock.info",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `drainUrl`         | *string*           | :heavy_check_mark: | N/A                |
| `integrationName`  | *string*           | :heavy_minus_sign: | N/A                |