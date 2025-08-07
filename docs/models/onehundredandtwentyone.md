# OneHundredAndTwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyOne } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndTwentyOne = {
  enabled: true,
  totpVerified: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `enabled`          | *boolean*          | :heavy_check_mark: | N/A                |
| `totpVerified`     | *boolean*          | :heavy_check_mark: | N/A                |